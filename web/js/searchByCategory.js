var sm = sm || {};

sm.search = (function () {
    var url = "http://localhost:8090/iserver/services/map-superwhu/rest/maps/cata";

    function searchByCategory(category) {
        var param = new L.supermap.QueryBySQLParameters({
            queryParams: [{
                name: "resultDataset@superwhu",
                attributeFilter: "FLMC_1 like '%" + category + "%' OR FLMC like '%" + category + "%'"
            }]
        });

        new L.supermap.QueryService(url).queryBySQL(param, function (serviceResult) {
            var shopLayer = sm.query.getShopLayer(); // 通过 query.js 访问当前的 shopLayer
            if (shopLayer) {
                sm.query.clearShopLayer(); // 使用 clearShopLayer 方法清除现有图层
            }

            var queryresult = serviceResult.result;

            // 检查查询结果是否为空
            if (queryresult && queryresult.recordsets && queryresult.recordsets.length > 0) {
                if (queryresult.recordsets[0].features) {
                    shopLayer = L.geoJSON(queryresult.recordsets[0].features, {
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
                                    //console.log(feature);
                                }
                            });
                        }
                    }).addTo(map);
                    sm.query.setShopLayer(shopLayer); // 更新 shopLayer
                } else {
                    console.error("记录集存在但没有 features 属性。");
                    console.log("记录集内容：", queryresult.recordsets[0]); // 打印记录集内容
                }
            } else {
                console.error("未找到任何记录集。");
            }
        });
    }

    return {
        searchByCategory: function (category) {
            searchByCategory(category);
        }
    }
})();
