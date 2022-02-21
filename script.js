var map = L.map('map').setView([37.0902, -95.7129], 3);

  // load a tile layer
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
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
