function sendSpotTypeToServer(spotType) {
    fetch('/query2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'spotType=' + encodeURIComponent(spotType)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('提交 spotType 时出错');
            }
            console.log('Spot type successfully sent to server');
        })
        .catch(error => {
            console.error('提交 spotType 时发生错误:', error);
        });
}
