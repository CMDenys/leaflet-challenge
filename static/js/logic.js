
//////  HW SCRIPT //////////////
////////////////////////////////

// Creating the map object
// Using Albuquerque, NM as center point
var myMap = L.map("map", {
    center: [35.0844, -106.6504],
    zoom: 6
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);


var earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

var earthquakeJson;

// Getting our GeoJSON data
d3.json(earthquakeData).then(function(data) {
  // for (var i = 0; i < data.length; i++) {
  //   var location = data[i].geometry;

   
  console.log(data)  

    // if (location) {
      // L.marker(location.coordinates[1], location.coordinates[0]).addTo(myMap)
  // }

  
})



