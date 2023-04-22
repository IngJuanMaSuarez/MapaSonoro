var poiGeoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          title: "Centro de Bogotá",
          audio_url: "https://lparisb.github.io/entrevistastesis/objects/mixintro.mp3"
        },
        geometry: {
          type: "Point",
          coordinates: [-74.12, 4.65]
        }
      }      
    ]
}

L.geoJSON(poiGeoJSON, {
    onEachFeature: function (feature, layer) {
        var contenidoPopup = 
            "<h2>" + feature.properties.title + "</h2>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(contenidoPopup)
    }
}).addTo(mymap)