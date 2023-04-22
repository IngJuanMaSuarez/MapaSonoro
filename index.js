(function (W) {
    var mymap = L.map("mapid").setView([4.65, -74.12], 11)
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mymap)
    popup_template = _.template(elementText("#popup-template"))
    geo_data = JSON.parse(elementText("#geo-data"))

    L.geoJson(geo_data, {
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.audio_url) {
                layer.bindPopup(popup_template(feature.properties))
            } else if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent)
            }
        },
    }).addTo(mymap)

    function elementText(selector) {
        return W.document.querySelector(selector).innerText
    }
})(window)