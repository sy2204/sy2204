var names = []; // 定义一个数组来保存名称，用于路径分析

//查询
var sm = sm || {};

sm.query = (function () {
    var shopLayer;
    var url = "http://localhost:8090/iserver/services/map-superwhu/rest/maps/cata";

    function createOrUpdateShopLayer(features) {
        if (shopLayer) {
            map.removeLayer(shopLayer);
        }
        shopLayer = L.geoJSON(features, {
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
                        queryByID(feature.properties.SmID, latlng);
                        console.log(feature);
                    }
                });
            }
        }).addTo(map);
    }

    function query(data) {
        var param = new L.supermap.QueryBySQLParameters({
            queryParams: [{
                name: "resultDataset@superwhu",
                attributeFilter: "name like '%" + data.field.title + "%'"
            }]
        });

        new L.supermap.QueryService(url).queryBySQL(param, function (serviceResult) {
            console.log(serviceResult);
            createOrUpdateShopLayer(serviceResult.result.recordsets[0].features);
        });
    }

    function queryByID(id, latlng) {
        var dataurl = "http://localhost:8090/iserver/services/data-superwhu/rest/data";

        var fParam = new L.supermap.GetFeaturesBySQLParameters({
            datasetNames: ["superwhu:resultDataset"],
            queryParameter: {
                name: "resultDataset@superwhu",
                attributeFilter: "SmID =" + id,
            }
        });

        new L.supermap.FeatureService(dataurl).getFeaturesBySQL(fParam, function (serviceResult) {
            var featureresult = serviceResult.result;
            if (featureresult && featureresult.features.features.length > 0) {
                var properties = featureresult.features.features[0].properties;

                var spot = {};
                spot.name = properties.name || properties.NAME || "未命名";
                spot.type = properties.FLMC || properties.FLMC_1 || "未知类型";
                spot.description = properties.description || properties.介绍 || "无描述";
                spot.openingHours = properties.openingHours || "无开放时间信息";
                spot.department = properties.学部 || "未知学部";
                spot.publicAccess = properties.是否开放 || "暂无开放信息";




                // 创建内容元素并使用你提供的HTML结构
                var content = `
                <div class="cards">
                    <div class="outlinePage">
                        <div class="name">${spot.name}</div>
                        <p><span class="xuebu">${spot.department}</span><span class="public">对外开放：${spot.publicAccess}</span></p>
                        <div class="splitLine"></div>
                        <div>
                            <img class="icon" src="/image/whu图书馆.png" alt="">
                        </div>
                    </div>
                            <div class="detailPage">
                                <div class="contentBox">
                                    <p class="content">${spot.description}</p>
                                    <button class="informButton slide-in-top" onclick="names.push('${spot.name}'); handleGoHere(${latlng[0]}, ${latlng[1]})">
                                        <img class="informButtonImage" src="/image/去这里.png" alt="">
                                        &ensp;&ensp;&ensp;去这里</button>
                                </div>
                                    <div class="slide-in-top">
                                </div>
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




    function clearShopLayer() {
        if (shopLayer) {
            shopLayer.clearLayers();
            map.removeLayer(shopLayer);
            shopLayer = null;
        }
    }

    return {
        onload: function (data) {
            query(data);
        },
        queryByID: queryByID,  // 公开 queryByID 函数
        clearShopLayer: clearShopLayer,
        getShopLayer: function () {
            return shopLayer;
        },
        setShopLayer: function (layer) {
            shopLayer = layer;
        }
    }

    


})();
