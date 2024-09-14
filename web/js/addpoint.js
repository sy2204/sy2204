// 如果 lm 未定义，初始化为一个空对象
var lm = lm || {};

lm.addpoint = (function () {
    var clickedLatLng = null;
    var isEnabled = false; // 用于标记功能是否开启
    var currentMarker = null; // 存储当前点击的 Marker

    function createPopup(latlng) {
        if (!isEnabled) return; // 如果功能未开启，不执行后续代码

        // 如果已经有一个 marker，先将其移除
        if (currentMarker) {
            map.removeLayer(currentMarker);
        }

        // 在点击的地点添加一个 marker
        currentMarker = L.marker(latlng).addTo(map);

        // 创建表单内容元素
        var formContent = `
        <div class="form-container">
            <div class="form-header">
                <h3>添加新的反馈</h3>
            </div>
            <div class="form-body">
                <div class="input-group">
                    <label for="pointName">主题：</label>
                    <input type="text" id="pointName" placeholder="请输入反馈主题">
                </div>
                <div class="input-group">
                    <label for="pointMeaning">内容：</label>
                    <input type="text" id="pointMeaning" placeholder="请输入反馈内容">
                </div>
                <div class="input-group">
                    <label for="latitude">纬度：</label>
                    <input type="text" id="latitude" value="${latlng[0]}" readonly>
                </div>
                <div class="input-group">
                    <label for="longitude">经度：</label>
                    <input type="text" id="longitude" value="${latlng[1]}" readonly>
                </div>
                <div class="form-actions">
                    <button class="submit-btn" onclick="submitForm('${latlng[0]}', '${latlng[1]}')">添加</button>
                    <button class="clear-btn" onclick="clearForm1()">清除</button>
                </div>
            </div>
        </div>`;

        // 使用 Leaflet 创建弹窗
        L.popup({
            offset: L.point(0, -1),
            maxWidth: 500,
            className: 'popup-form'
        }).setLatLng(latlng).setContent(formContent).openOn(map);
    }

    function enableAddPoint() {
        alert('意见反馈已开启');
        isEnabled = true;
        map.on('click', function (e) {
            clickedLatLng = e.latlng;
            createPopup([clickedLatLng.lat, clickedLatLng.lng]);
        });
    }

    function clear() {
        if (isEnabled) {
            isEnabled = true;
            alert('意见反馈已关闭');
        }
        clickedLatLng = null;
        map.off('click'); // 关闭地图点击事件
        isEnabled = false; // 禁用添加点功能
        if (currentMarker) {
            map.removeLayer(currentMarker); // 清除 Marker
            currentMarker = null;
        }
    }

    return {
        onload: function () {
            var activateButton = document.getElementById("activateAddPointButton");
            activateButton.addEventListener("click", function() {
                enableAddPoint(); // 点击按钮后启用添加点功能
            });
        },
        clear: function () {
            clear(); // 当用户点击清除按钮时会执行此方法
        }
    };
})();

// 页面加载时初始化添加点功能
document.addEventListener("DOMContentLoaded", function () {
    lm.addpoint.onload(); // 调用 onload 方法绑定事件
});

// 提交表单逻辑，使用 fetch
function submitForm(lat, lng) {
    var pointName = document.getElementById('pointName').value;
    var pointMeaning = document.getElementById('pointMeaning').value;

    if (pointName && pointMeaning) {
        // 使用 fetch 发送 POST 请求
        fetch('/addpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: new URLSearchParams({
                name: pointName,
                meaning: pointMeaning,
                lat: lat,
                lng: lng
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // 返回 JSON 格式响应
                } else {
                    throw new Error('请求失败，状态码: ' + response.status);
                }
            })
            .then(data => {
                alert("意见反馈已提交");
            })
            .catch(error => {
                console.error('错误:', error);
            });
    } else {
        alert('请输入主题和内容');
    }
}

// 清除表单逻辑
function clearForm1() {
    document.getElementById('pointName').value = '';
    document.getElementById('pointMeaning').value = '';
    clickedLatLng = null;
    if (currentMarker) {
        map.removeLayer(currentMarker); // 清除 Marker
        currentMarker = null;
    }

}
