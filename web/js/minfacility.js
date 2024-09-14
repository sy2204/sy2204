var sm = sm || {};
var facilityStartPoint = null; // 用于存储出发点的坐标
var facilityStartPointMarker = null; // 用于存储出发点的标记
var minpathLayer = null;

sm.closestFacilitySearch = (function () {
    var serviceUrl = "http://localhost:8090/iserver/services/transportationAnalyst-superwhu/rest/networkanalyst/superwhu_Network@superwhu";
    var selectedCategory;

    function promptForStartingPoint() {
        map.off('click');  // 清除旧的点击事件
        // 重置出发点
        facilityStartPoint = null;

        map.on('click', function (e) {
            facilityStartPoint = e.latlng;

            if (facilityStartPointMarker) {
                map.removeLayer(facilityStartPointMarker);
            }

            facilityStartPointMarker = L.marker(facilityStartPoint).addTo(map);
            map.off('click');  // 防止多次触发

            promptForCategory(facilityStartPoint);
        });

        alert("请点击地图选择出发点");
    }

    function promptForCategory(startPoint) {
        var modal = document.getElementById("categoryModal");
        var closeBtn = document.querySelector(".card4");

        // 打开模态框
        modal.style.display = "flex";

        // 当用户点击关闭按钮时，关闭模态框
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };

        // 当用户点击模态框外部时，关闭模态框
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

        // 清除之前的事件监听器
        document.querySelector(".card1").removeEventListener("click", handleCard1Click);
        document.querySelector(".card2").removeEventListener("click", handleCard2Click);
        document.querySelector(".card3").removeEventListener("click", handleCard3Click);

        // 添加新的事件监听器
        document.querySelector(".card1").addEventListener("click", handleCard1Click);
        document.querySelector(".card2").addEventListener("click", handleCard2Click);
        document.querySelector(".card3").addEventListener("click", handleCard3Click);

        // 定义点击事件处理函数
        function handleCard1Click() {
            selectedCategory = "图书馆";
            modal.style.display = "none";
            searchFacilitiesByCategory(selectedCategory);
        }

        function handleCard2Click() {
            selectedCategory = "食堂";
            modal.style.display = "none";
            searchFacilitiesByCategory(selectedCategory);
        }

        function handleCard3Click() {
            selectedCategory = "教学楼";
            modal.style.display = "none";
            searchFacilitiesByCategory(selectedCategory);
        }
    }


    function searchFacilitiesByCategory(category) {
        var url = "http://localhost:8090/iserver/services/map-superwhu/rest/maps/cata";
        var param = new L.supermap.QueryBySQLParameters({
            queryParams: [{
                name: "resultDataset@superwhu",
                attributeFilter: "FLMC_1 like '%" + category + "%' OR FLMC like '%" + category + "%'"
            }]
        });

        new L.supermap.QueryService(url).queryBySQL(param, function (serviceResult) {
            var queryResult = serviceResult.result;
            if (queryResult && queryResult.recordsets && queryResult.recordsets.length > 0) {
                var featureCollection = queryResult.recordsets[0].features;
                if (featureCollection && featureCollection.type === "FeatureCollection") {
                    var features = featureCollection.features; // 提取 features 数组

                    var facilities = [];
                    L.geoJSON(features, {
                        onEachFeature: function (feature, layer) {
                            layer.on({
                                click: function () {
                                    var coordinates = feature.geometry.coordinates[0][0][0];
                                    var latlng = [coordinates[1], coordinates[0]];
                                    sm.query.queryByID(feature.properties.SmID, latlng);
                                    console.log(feature);
                                }
                            });
                            var coordinates = feature.geometry.coordinates[0][0][0];
                            var latlng = L.latLng(coordinates[1], coordinates[0]);
                            facilities.push(latlng);
                        }
                    });

                    console.log("Found facilities:", facilities);
                    if (facilities.length >= 2) {
                        performClosestFacilityAnalysis(facilityStartPoint, facilities, features);
                    } else {
                        console.error("少于两个设施可用于分析。找到的设施数量:", facilities.length);
                    }
                } else {
                    console.error("记录集存在但没有有效的 FeatureCollection。");
                    console.log("记录集内容：", queryResult.recordsets[0]);
                }
            } else {
                console.error("未找到任何记录集。");
            }
        });
    }

    function performClosestFacilityAnalysis(facilityStartPoint, facilities, features) {


        var findClosestFacilitiesService = new L.supermap.NetworkAnalystService(serviceUrl);
        var resultSetting = new L.supermap.TransportationAnalystResultSetting({
            returnEdgeFeatures: true,
            returnEdgeGeometry: true,
            returnEdgeIDs: true,
            returnNodeFeatures: true,
            returnNodeGeometry: true,
            returnNodeIDs: true,
            returnPathGuides: true,
            returnRoutes: true
        });
        var analystParameter = new L.supermap.TransportationAnalystParameter({
            resultSetting: resultSetting,
            weightFieldName: "SmLength"
        });
        var findClosestFacilitiesParameter = new L.supermap.FindClosestFacilitiesParameters({
            event: { x: facilityStartPoint.lng, y: facilityStartPoint.lat }, // 使用 facilityStartPoint 而不是 startPoint
            expectFacilityCount: 1,
            facilities: facilities.map(function (latlng) {
                return { x: latlng.lng, y: latlng.lat };
            }),
            isAnalyzeById: false,
            parameter: analystParameter
        });

        findClosestFacilitiesService.findClosestFacilities(findClosestFacilitiesParameter).then(function (serviceResult) {
            if (serviceResult.result && serviceResult.result.facilityPathList) {
                // 获取最近的设施路径
                var closestFacilityPath = serviceResult.result.facilityPathList[0];

                // 查找最近设施对应的 feature
                var closestFacilityFeature = features.find(function (feature) {
                    var coordinates = feature.geometry.coordinates[0][0][0];
                    return coordinates[1] === closestFacilityPath.facility.y && coordinates[0] === closestFacilityPath.facility.x;
                });

                // 清除现有设施图层
                var shopLayer = sm.query.getShopLayer();
                if (shopLayer) {
                    sm.query.clearShopLayer();
                }

                // 创建新的设施图层
                if (closestFacilityFeature) {
                    shopLayer = L.geoJSON(closestFacilityFeature, {
                        style:  {
                            color:'#FFC610',           // 轮廓线颜色
                            weight: 2,              // 轮廓线宽度
                            fillColor: 'blue' ,      // 填充颜色
                            fillOpacity: 0.9        // 填充透明度
                        },
                        onEachFeature: function (feature, layer) {
                            layer.on({
                                click: function () {
                                    var coordinates = feature.geometry.coordinates[0][0][0];
                                    var latlng = [coordinates[1], coordinates[0]];
                                    sm.query.queryByID(feature.properties.SmID, latlng);
                                    console.log(feature);
                                }
                            });
                        }
                    }).addTo(map);

                    sm.query.setShopLayer(shopLayer); // 更新 shopLayer
                }

                // 检查并移除旧的路径图层
                if (minpathLayer) {
                    map.removeLayer(minpathLayer);
                }

                // 创建新的路径图层
                minpathLayer = L.geoJSON(closestFacilityPath.route, {
                    style: {
                        color: 'blue',
                        weight: 5,
                        opacity: 0.7
                    }
                }).addTo(map);

            } else {
                console.error("未找到最近设施的路径信息，结果：", serviceResult.result);
            }
        }).catch(function (error) {
            console.error("分析过程中出现错误：", error);
        });

    }

    return {
        startSearch: function () {
            promptForStartingPoint();
        }
    }
})();

// 假设页面上有一个按钮，其 id 为 'startSearchBtn'
document.getElementById('startSearchBtn').addEventListener('click', function () {
    sm.closestFacilitySearch.startSearch();
});
