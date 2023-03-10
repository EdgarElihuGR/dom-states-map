// Creating map options
var mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 10
}
    
let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([51.958, 9.141]);
marker.addTo(map);