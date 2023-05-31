const states = ['Jalisco', 'Michoacan', 'Colima', 'Nuevo Leon', 'Sinaloa'];
var map;

const createMap = () => {
    // Creating map options
    var mapOptions = {
        center: [23.604, -102.042],
        zoom: 5
    }
        
    map = new L.map('map' , mapOptions);

    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    let marker = new L.Marker([51.958, 9.141]);
    marker.addTo(map);
};

const drawStatesOnMap = (states, country) => {
    for(let state of states){
        let api = `https://nominatim.openstreetmap.org/search/?state=${state}&country=${country}&format=json`;
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                console.log(state + ": ");
                console.log(data)
                // L.polygon(data[0].).addTo(map);
            });
    }
 }

createMap();
drawStatesOnMap(states, 'Mexico')