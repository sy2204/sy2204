
var busInfoBox; // 定义全局变量

// 定义三条巴士路线的 URL
var busRouteUrl1 = "http://localhost:8090/iserver/services/map-CampusWorkspace/rest/maps/%E6%A0%A1%E5%B7%B41";
var busRouteUrl2 = "http://localhost:8090/iserver/services/map-CampusWorkspace/rest/maps/%E6%A0%A1%E5%B7%B42";
var busRouteUrl3 = "http://localhost:8090/iserver/services/map-CampusWorkspace/rest/maps/%E6%A0%A1%E5%B7%B45";
var currentBusRouteLayer = null;

/*// 校园巴士按钮点击事件
document.getElementById('route bus').addEventListener('click', function() {
    activateBusRouteSelection();
});*/



function activateBusRouteSelection() {
    // 显示选择路线的信息框
    busInfoBox = document.createElement('div');
    busInfoBox.id = 'busRouteInfoBox';
    busInfoBox.style.position = 'absolute';
    busInfoBox.style.bottom = '10px';
    busInfoBox.style.right = '10px';
    busInfoBox.style.backgroundColor = 'white';
    busInfoBox.style.padding = '10px';
    busInfoBox.style.border = '1px solid #ccc';
    busInfoBox.innerHTML = `
        <label for="busRouteSelect">选择巴士路线:</label>
        <select id="busRouteSelect">
            <option value="1">1号线</option>
            <option value="2">2号线</option>
            <option value="3">5号线</option>
        </select>
        <button id="confirmRouteButton">确认</button>
    `;
    document.body.appendChild(busInfoBox);

    // 确认按钮点击事件
    document.getElementById('confirmRouteButton').addEventListener('click', function() {
        var selectedRoute = document.getElementById('busRouteSelect').value;
        switchBusRouteLayer(selectedRoute);
    });
}
function removeBusInfoBox() {
    if (busInfoBox) {
        document.body.removeChild(busInfoBox);
        busInfoBox = null; // 清除引用
    }
}



function switchBusRouteLayer(route) {
    // 移除当前巴士路线图层
    if (currentBusRouteLayer) {
        map.removeLayer(currentBusRouteLayer);
    }

    // 根据选择的路线切换图层
    var selectedUrl;
    if (route === "1") {
        selectedUrl = busRouteUrl1;
    } else if (route === "2") {
        selectedUrl = busRouteUrl2;
    } else if (route === "3") {
        selectedUrl = busRouteUrl3;
    }

    // 添加新的巴士路线图层到地图
    currentBusRouteLayer = new L.supermap.TiledMapLayer(selectedUrl).addTo(map);
}
