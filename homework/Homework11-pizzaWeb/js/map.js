mapboxgl.accessToken = 'pk.eyJ1IjoiZW10ZWNzIiwiYSI6ImNqbmVmbXl6dzA3ZDMzbHBkdGlvODB4dnkifQ.B58VyP6B2p7VW4riDun6Kw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-74.50, 40.05], // starting position
    zoom: 11 // starting zoom
});