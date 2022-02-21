var map = L.map('map').setView([37.0902, -95.7129], 3);

  // load a tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

  // load GeoJSON from an external file
$.getJSON("https://raw.githubusercontent.com/erheinrichs/StateBoundaries/main/places.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });


 $.getJSON("https://raw.githubusercontent.com/erheinrichs/SchoolRankings/main/places.geojson",function(data){
   var ratIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png',
    iconSize: [20,20]
  }); 
  L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	 var marker = L.marker(latlng,{icon: ratIcon});
      marker.bindPopup(feature.properties.State + '<br/>' + feature.properties.["K-12 Achievement Score"] + '<br/>' + feature.properties.["School Ranking"]);
        return marker;
      
     
    }
  }  ).addTo(map);
});
