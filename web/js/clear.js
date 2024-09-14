var sm = sm || {};

sm.clear = (function () {
    function clear() {
        var shopLayer = sm.query.getShopLayer();
        if (shopLayer) {
            map.removeLayer(shopLayer);
            sm.query.setShopLayer(null); // 清空 shopLayer
        }
    }

    return {
        clear: function () {
            clear();
        }
    }
})();
