// 如果 lm 未定义，初始化为一个空对象
var lm = lm || {};
lm.heatMap = (function () {
    var heatmapLayer;

    function onloadheatmap() {
        // 使用 fetch 代替 $.ajax，请求点数据
        fetch('/addpoint', {
            method: 'GET', // 使用 GET 方法获取点数据
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()) // 解析为 JSON
            .then(data => {
                // 处理回应，将点数据传递给热力图渲染函数
                console.log(data);
                createheatMap(data); // 创建热力图
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function createheatMap(points) {
        var centers = [];
        points.forEach(function(point) {
            // 直接使用服务器返回的点数据中的 lat 和 lng
            centers.push([point.lat, point.lng]); // 将每个点的经纬度存入 centers 数组
        });

        console.log(centers);

        // 将 centers 中的经纬度坐标转换为 heatmapData 格式
        var heatmapData = centers.map(item => ({
            lat: item[0],
            lng: item[1]
        }));

        // 如果已有热力图图层，先清除
        if (heatmapLayer) {
            map.removeLayer(heatmapLayer);
        }

        // 创建并添加热力图层
        heatmapLayer = L.heatLayer(heatmapData.map(item => [item.lat, item.lng]), {
            radius: 50,   // 增大半径，覆盖范围更广
            maxOpacity: 0.7, // 最大不透明度接近 1，颜色更饱满
            blur: 20,    // 减小模糊半径，使得热力点更加清晰
            minOpacity: 0.2 // 增加最小不透明度，使得低密度区域也有较明显的显示

        }).addTo(map);
    }

    // 清除热力图层
    function clearheatmap() {
        if (heatmapLayer) {
            map.removeLayer(heatmapLayer);
            heatmapLayer = null;
        }
    }

    return {
        onloadheatmap: function () {
            onloadheatmap();
        },
        clearheatmap: function () {
            clearheatmap();
        }
    };
})();
