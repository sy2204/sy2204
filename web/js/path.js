var destination = null;
var startPoint = null;
var pathLayer = null;  // 确保在全局范围内定义

// 1. 设置目的地函数
var DestinationPointMarker = null;
function setDestination(lat, lng) {
    destination = [lat, lng];
    if (DestinationPointMarker) {
        map.removeLayer(DestinationPointMarker);
    }
    // 添加样式标记到地图上
    DestinationPointMarker = L.marker([lat, lng]).addTo(map);
    console.log([lat, lng]);
    alert("目的地已设置，请双击在地图上选择出发点");

    map.once('dblclick', function(e) {
        setStartPoint(e.latlng);
    });
}

// 2. 设置出发点函数
var startPointMarker = null;
function setStartPoint(latlng) {
    startPoint = latlng;
    // 如果已有出发点标记，先移除它
    if (startPointMarker) {
        map.removeLayer(startPointMarker);
    }
    // 添加样式标记到地图上
    startPointMarker = L.marker(latlng).addTo(map);
    console.log(latlng);
    alert("出发点已设置，请点击地点导航按钮进行路径分析");
}

// 3. 路径规划函数（原 calculateRoute，现已改为 Route）
function Route() {
    if (!startPoint || !destination) {
        alert("请先选择出发点和目的地！");
        return;
    }

    var url_path = "http://localhost:8090/iserver/services/transportationAnalyst-CampusWorkspace/rest/networkanalyst/superwhu_Network@Campus";

    // 初始化路径分析参数
    var analystParameter = new L.supermap.TransportationAnalystParameter({
        resultSetting: new L.supermap.TransportationAnalystResultSetting({
            returnEdgeFeatures: true,
            returnEdgeGeometry: true,
            returnEdgeIDs: true,
            returnNodeFeatures: true,
            returnNodeGeometry: true,
            returnPathGuides: true
        }),
        weightFieldName: "SmLength"
    });

    var findPathParams = new L.supermap.FindPathParameters({
        isAnalyzeById: false,
        nodes: [
            { x: startPoint.lng, y: startPoint.lat },
            { x: destination[1], y: destination[0] }
        ],
        hasLeastEdgeCount: false,
        parameter: analystParameter
    });

    new L.supermap.NetworkAnalystService(url_path).findPath(findPathParams, function(serviceResult) {
        if (serviceResult && serviceResult.result && serviceResult.result.pathList && serviceResult.result.pathList.length > 0) {
            console.log("路径分析结果:", serviceResult);

            // 清除之前的路径层
            if (pathLayer) {
                map.removeLayer(pathLayer);
            }

            // 使用 edgeFeatures 绘制路径
            var edgeFeatures = serviceResult.result.pathList[0].edgeFeatures;

            if (edgeFeatures) {
                pathLayer = L.geoJSON(edgeFeatures,{
                    style: {
                        color: 'blue',
                        weight: 5,
                        opacity: 0.7
                    }}).addTo(map);

                // 绑定路径引导信息
                pathLayer.bindPopup(function (layer) {
                    var str = [];
                    var pathGuideItems = serviceResult.result.pathList[0].pathGuideItems.features;
                    for (var i = 0; i < pathGuideItems.length; i++) {
                        var description = pathGuideItems[i].properties.description;
                        str += description + "<br>";
                    }
                    return str;
                });
            } else {
                alert("路径数据为空，无法在地图上显示。");
            }
        } else {
            alert("路径分析失败或未找到合适的路径。");
            console.log("路径分析失败:", serviceResult);
        }
    });
}

// 4. 确保在 DOM 完全加载后绑定事件监听器
document.addEventListener('DOMContentLoaded', function() {
    var pathQueryButton = document.getElementById('pathquery');
    if (pathQueryButton) {
        pathQueryButton.addEventListener('click', Route); // 这里改为 Route
    } else {
        console.error("无法找到id为'pathquery'的按钮");
    }
});
