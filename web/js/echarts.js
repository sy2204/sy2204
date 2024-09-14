/*
// 初始化词云图
var chart = echarts.init(document.getElementById('wordCloud'));

// 加载数据库中的历史记录并生成词云图
function loadQueryHistory() {
    fetch('/query1')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);  // 打印从后端获取的数据，确保它是数组格式
            if (Array.isArray(data)) {
                var queryHistory = data.map(item => ({
                    name: item.query_text,
                    value: item.query_count
                }));
                updateWordCloud(queryHistory);
            } else {
                console.error('Expected an array but got:', data);
            }
        })
        .catch(error => console.error('Error:', error));
}

// 更新词云图
function updateWordCloud(queryHistory) {
    var option = {
        series: [{
            type: 'wordCloud',
            shape: 'circle',
            gridSize: 2,
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                }
            },
            data: queryHistory
        }]
    };
    chart.setOption(option);
}
*/

// 处理查询并保存到数据库
function handleQuery() {
    var query = document.getElementById('queryInput').value.trim();
    if (!query) {  // 如果查询内容为空则不保存到数据库
        return;
    }
    fetch('/query1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'query=' + encodeURIComponent(query)
    }).then(response => {
        if (!response.ok) {
            throw new Error('提交查询时出错');
        }
        loadQueryHistory();  // 查询后重新加载词云图
    }).catch(error => {
        console.error('提交查询时发生错误:', error);
        alert('提交查询失败，请重试！');
    });
}
/*

// 页面加载时获取历史记录
window.onload = loadQueryHistory;
*/
