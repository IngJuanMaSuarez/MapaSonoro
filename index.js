var mymap = L.map("mapid").setView([4.65, -74.12], 11)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mymap)