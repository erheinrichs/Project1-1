var map = L.map('mapid').setView([43.07, -89.4], 10);

 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(map);

var marker = L.marker([43.0747, -89.38]).addTo(map);
var marker2 = L.marker([43.076, -89.4]).addTo(map);
var circle = L.circle([43.0747, -89.38], {
    color: 'blue',
    fillColor: '#f04',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

var polygon = L.polygon([
    [43.07, -89.38],
    [43.1, -89.38],
    [43.2, -89.7],
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am the Capitol building of Madison, WI.").openPopup();
marker2.bindPopup("<b> Hello again world!</b><br>I am the Memorial Union Terrace")
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a random triangle.");

var popup = L.popup()
    .setLatLng([42.9, -89.5])
    .setContent("I am a standalone popup.")
    .openOn(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
