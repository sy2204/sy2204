var travelrouteLayer;
var travelpointLayer;

var travel = (function () {
    var url = "http://localhost:8090/iserver/services/map-CampusWorkspace/rest/maps/%E6%99%AF%E7%82%B9"; // 合并后的单个URL

    // 创建或更新路线图层
    function createOrUpdateTravelrouteLayer(features) {
        if (travelrouteLayer) {
            map.removeLayer(travelrouteLayer);
        }
        travelrouteLayer = L.geoJSON(features, {
            onEachFeature: function (feature, layer) {
                layer.on({
                    click: function () {
                        var coordinates = feature.geometry.coordinates;
                        var latlngs = coordinates.map(function(coord) {
                            return [coord[1], coord[0]];
                        });
                       // console.log("Travel route clicked:", feature);
                        // 处理点击事件
                    }
                });
            },
            style: function(feature) {
                return { color: 'blue' }; // 设置路线的样式
            }
        }).addTo(map);
    }

    // 创建或更新景点图层
    function createOrUpdateTravelpointLayer(features) {
        if (travelpointLayer) {
            map.removeLayer(travelpointLayer);
        }
        travelpointLayer = L.geoJSON(features, {
            onEachFeature: function (feature, layer) {
                layer.on({
                    click: function () {
                        var coordinates = feature.geometry.coordinates;
                        if (feature.geometry.type === "Point") {
                            var latlng = [coordinates[1], coordinates[0]];
                            queryTravelbyPoints(feature.properties.SmID, latlng);
                            //console.log("Travel point clicked:", feature);
                        }
                    }
                });
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng); // 设置点的样式，默认使用标记
            }
        }).addTo(map);
    }

    // 查询路线数据
    function queryTravelRoutes() {

        var routeParam = new L.supermap.QueryBySQLParameters({

            queryParams: [{
                name: "游玩路线@Campus",
                attributeFilter: "" // 空参数表示查询所有
            }]
        });

        new L.supermap.QueryService(url).queryBySQL(routeParam, function (serviceResult) {
            //console.log(serviceResult);
            createOrUpdateTravelrouteLayer(serviceResult.result.recordsets[0].features);
        });
    }

    // 查询景点数据
    function queryTravelPoints() {

        var routeParam = new L.supermap.QueryBySQLParameters({

            queryParams: [{
                name: "景点@Campus",
                attributeFilter: "" // 空参数表示查询所有
            }]
        });

        new L.supermap.QueryService(url).queryBySQL(routeParam, function (serviceResult) {
            //console.log(serviceResult);
            createOrUpdateTravelpointLayer(serviceResult.result.recordsets[0].features);
        });
    }

    function queryTravelbyPoints(id, latlng) {
        var dataurl = "http://localhost:8090/iserver/services/data-CampusWorkspace/rest/data";
        var pointParam = new L.supermap.GetFeaturesBySQLParameters({
            datasetNames: ["Campus:景点"],
            queryParameter: {
                name: "景点@Campus",
                attributeFilter: "SmID =" + id,
            }
        });
        new L.supermap.FeatureService(dataurl).getFeaturesBySQL(pointParam, function (serviceResult) {
            //console.log(serviceResult);
            var featureresult = serviceResult.result;
            if (featureresult && featureresult.features.features.length > 0) {
                var properties = featureresult.features.features[0].properties;

                var spot = {};
                spot.name = properties.名称 || properties.NAME || "未命名";
                spot.pic = properties.图片 || properties.FLMC_1 || "未知图片";

                var content = `
                    <div class="card">
                        <img src="${spot.pic}" alt="">
                        <div class="card__content">
                            <p class="card__title">${spot.name}</p>
                        </div>
                    </div>`;
                L.popup({
                    offset: L.point(0, -1),
                    maxWidth: 900,
                    className: 'popup'
                }).setLatLng(latlng).setContent(content).openOn(map);

            } else {
                console.log("未找到符合条件的特征");
            }
        });
    }

    // 暴露接口
    return {
        queryTravelRoutes: queryTravelRoutes,
        queryTravelPoints: queryTravelPoints
    };
})();
