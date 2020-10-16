//create map

const map = L.map('mapid').setView([-23.7080047,-46.4179382], 15);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})
// create popup overlay 
const popup = L.popup({
    closeButton: false,
    classname: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orfanato.html?id=1" class="choose-orfanato"> <img src="./public/images/arrow-white.svg"> </a>')

//create and add marker
L.marker([-23.7080047,-46.4179382], { icon })

    .addTo(map)
    .bindPopup(popup)
   