$(document).ready(function () {

    var urlwhu1 = "http://localhost:8090/iserver/services/map-superwhu/rest/maps/%40%E6%AD%A6%E5%A4%A7%E5%9C%B0%E5%9B%BE";
    var urlwhu2 = "http://localhost:8090/iserver/services/map-superwhu/rest/maps/%E6%A8%B1%E8%8A%B1%E7%89%88";
    var currentUrl = urlwhu1; // 初始URL
    var mapLayer = new L.supermap.TiledMapLayer(currentUrl).addTo(map);
    let isBusRoute = true; // 状态变量，跟踪当前路线

    $("#btn").click(function () {
        var elements = $(".l-navbar,.nav_link,.input,#checkbox:checked~label,#checkbox:checked~.input,.fonts,.clear button");

        elements.toggleClass("green sakura");

        changeText(); // 该函数现在将切换 isBusRoute 变量

        // 切换 URL
        currentUrl = (currentUrl === urlwhu1) ? urlwhu2 : urlwhu1;

        if (mapLayer) {
            map.removeLayer(mapLayer);
        }
        mapLayer = new L.supermap.TiledMapLayer(currentUrl).addTo(map);
    });

    // 一次性绑定事件监听器
    const routeBtn = document.getElementById('route-btn');
    if (routeBtn) {
        routeBtn.addEventListener('click', routeHandler);
    }

    function routeHandler() {
        if (isBusRoute) {
            activateBusRouteSelection();
        } else {
            travel.queryTravelRoutes();
            travel.queryTravelPoints();
        }
    }

    function changeText() {
        var link = document.getElementById("route-text");
        var image = document.getElementById("route-image");
        if (link && image) {
            if (isBusRoute) {
                link.textContent = "赏樱路线";
                image.src = "/image/sakuratree.png";
            } else {
                link.textContent = "校园巴士路线";
                image.src = "/image/bus.png";
            }
            isBusRoute = !isBusRoute; // 切换状态变量
        }
    }
});

// 定义箭头函数$
const $$ = s => {
  let dom = document.querySelectorAll(s)
  return dom.length == 1 ? dom[0] : dom
}
let mainBtn = $$(".main-btn"); //获取按钮主体
let greenAll = $$(".green-all"); //获取学生版按钮
let container = $$(".container"); //获取最外层元素
let sakuraBtn = $$(".sakura-btn"); //获取樱花版按钮
let sakuraAll = $$(".sakura-all"); //获取所有樱花
let isMoved = false; //按钮状态，判断是否学生或樱花,默认为学生
let isClicked = false; // 新变量，用于跟踪是否刚刚发生了鼠标点击事件

mainBtn.addEventListener("click", function () {
    // 学生版样式
    if (isMoved) {
        mainBtn.style.transform = "translateX(0)"; //水平平移距离为0px
        mainBtn.style.backgroundColor = "rgb(119, 236, 147)"; //按钮主体的背景颜色变为黑色
        // 所有学生上升
        greenAll.style.transform = "translateY(-25px)"
        //樱花按钮完全透明-隐藏
        sakuraBtn.style.opacity = "0";
        //樱花上升-樱花隐藏
        sakuraAll.style.transform = "translateY(-75px)";
        sakuraAll.style.opacity = "0";
        mainBtn.style.backgroundImage = "url(/image/student.png)";
        container.style.backgroundColor = "rgb(5, 171, 131)";
        greenAll.style.opacity = "1";
    } else {
        // 樱花版样式
        mainBtn.style.transform = "translateX(70px)"; //水平平移距离为100px
        mainBtn.style.backgroundColor = "rgb(233, 229, 242)"; //按钮主体的背景颜色变为黑色
        // 樱花按钮完全显示
        sakuraBtn.style.opacity = "1";
        // 樱花下降-樱花显示
        sakuraAll.style.transform = "translateY(-25px)";
        sakuraAll.style.opacity = "1";
        mainBtn.style.backgroundImage = "url(/image/Sakura.png)";
        container.style.backgroundColor = "rgb(135, 120, 182)"
        greenAll.style.transform = "translateY(25px)";
        greenAll.style.opacity = "0";
    }
    // 检测鼠标是否点击,默认已经点击
    isClicked = true;
    // 计时器，当0.5秒后，点击状态变成非点击
    setTimeout(function() {
    isClicked = false;
    }, 500);
    isMoved = !isMoved;
});
mainBtn.addEventListener("mouseover", function () { 
    if (!isClicked) 
        return;
});
