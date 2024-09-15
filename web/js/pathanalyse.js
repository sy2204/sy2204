var selectedPoints = [];
var markers = [];  // 存储所有添加到地图上的标记
var pathAnalysisLayer = null;
var isPathAnalysisMode = false; // 用于控制“去这里”按钮的行为


function activatePathAnalysis() {
    isPathAnalysisMode = true;  // 激活路径分析模式
    alert("已激活路径分析模式，点击'去这里'按钮来添加路径点。");
    document.getElementById('infoBox').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    var pathQueryButton = document.getElementById('pathanalyse');
    if (pathQueryButton) {
        pathQueryButton.addEventListener('click', activatePathAnalysis);
    } else {
        console.error("无法找到id为'pathanalyse'的按钮");
    }
});

function handleGoHere(lat, lng) {
    if (isPathAnalysisMode) {
        addPointToPath(lat, lng); // 路径分析模式，添加为路径点
    } else {
        setDestination(lat, lng); // 默认行为，设置为导航目的地
    }

    // 更新标记显示的名称
    updateMarkers(names);
}

function addPointToPath(lat, lng) {
    var latlng = L.latLng(lat, lng);
    selectedPoints.push(latlng);

    var marker = L.marker(latlng).addTo(map).bindTooltip("点 " + selectedPoints.length, {
        permanent: true,
        direction: 'right'
    }).openTooltip();

    markers.push(marker);
    updateInfoBox();
    alert("已添加路径点: " + selectedPoints.length);
}


function updateMarkers(names) {
    markers.forEach((marker, i) => {
        // 更新每个标记的 tooltip 显示
        marker.unbindTooltip(); // 移除之前的 tooltip
        marker.bindTooltip("点 " + (i + 1) , {
            permanent: true,  // 始终显示 tooltip
            direction: 'right'  // 在标记的右侧显示
        }).openTooltip();
    });
}


        // 更新自定义图标
        /*var customIcon = L.divIcon({
            html: "<div style='background-color: white; border-radius: 50%; padding: 5px; text-align: center;'>" + (i + 1) + "</div>",
            className: '',  // 这里可以设置图标的样式类
            iconSize: [30, 30]  // 图标大小
        });
        marker.setIcon(customIcon);*/


function updateInfoBox() {
    var infoBox = document.getElementById('infoBoxContent');
    infoBox.innerHTML = '';
    selectedPoints.forEach(function(point, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = "点 " + (index + 1) + ": " + ": " + names[index]//+ point.lat.toFixed(5) + ", " + point.lng.toFixed(5) +
            +" <button onclick='removePoint(" + index + ")'>删除</button>" +
            (index > 0 ? " <button onclick='movePointUp(" + index + ")'>上移</button>" : "") +
            (index < selectedPoints.length - 1 ? " <button onclick='movePointDown(" + index + ")'>下移</button>" : "");
        infoBox.appendChild(listItem);
    });
}

function movePointUp(index) {
    if (index > 0) {
        // 交换 selectedPoints 中的点
        var tempPoint = selectedPoints[index - 1];
        selectedPoints[index - 1] = selectedPoints[index];
        selectedPoints[index] = tempPoint;

        // 交换 markers 中的标记
        var tempMarker = markers[index - 1];
        markers[index - 1] = markers[index];
        markers[index] = tempMarker;

        // 交换 names 中的名称
        var tempName = names[index - 1];
        names[index - 1] = names[index];
        names[index] = tempName;

        updateInfoBox();
        updateMarkers(names); // 传递 names 数组
    }
}


function movePointDown(index) {
    if (index < selectedPoints.length - 1) {
        // 交换 selectedPoints 中的点
        var tempPoint = selectedPoints[index + 1];
        selectedPoints[index + 1] = selectedPoints[index];
        selectedPoints[index] = tempPoint;

        // 交换 markers 中的标记
        var tempMarker = markers[index + 1];
        markers[index + 1] = markers[index];
        markers[index] = tempMarker;

        // 交换 names 中的名称
        var tempName = names[index + 1];
        names[index + 1] = names[index];
        names[index] = tempName;

        updateInfoBox();
        updateMarkers(names); // 传递 names 数组
    }
}


function removePoint(index) {
    map.removeLayer(markers[index]); // 移除地图上的标记
    markers.splice(index, 1);        // 从 markers 数组中移除标记
    selectedPoints.splice(index, 1); // 从 selectedPoints 数组中移除点
    names.splice(index, 1);          // 从 names 数组中移除名称

    updateInfoBox();
    updateMarkers(names); // 传递 names 数组
}



function calculateRoute() {
    if (selectedPoints.length < 2) {
        alert("请至少选择两个点进行路径分析！");
        return;
    }

    isPathAnalysisActive = false;  // 停止路径分析模式

    var url_path = "http://localhost:8090/iserver/services/transportationAnalyst-CampusWorkspace/rest/networkanalyst/superwhu_Network@Campus";

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

    var nodes = selectedPoints.map(function(point) {
        return { x: point.lng, y: point.lat };
    });

    var findPathParams = new L.supermap.FindPathParameters({
        isAnalyzeById: false,
        nodes: nodes,
        hasLeastEdgeCount: false,
        parameter: analystParameter
    });

    new L.supermap.NetworkAnalystService(url_path).findPath(findPathParams, function(serviceResult) {
        if (serviceResult && serviceResult.result && serviceResult.result.pathList && serviceResult.result.pathList.length > 0) {
            console.log("路径分析结果:", serviceResult);

            if (pathAnalysisLayer) {
                map.removeLayer(pathAnalysisLayer);
            }

            var edgeFeatures = serviceResult.result.pathList[0].edgeFeatures;

            if (edgeFeatures) {
                pathAnalysisLayer = L.geoJSON(edgeFeatures,{
                    style: {
                        color: 'blue',
                        weight: 5,
                        opacity: 0.7
                    }}).addTo(map);

                pathAnalysisLayer.bindPopup(function (layer) {
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

