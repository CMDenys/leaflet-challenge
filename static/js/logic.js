
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
    // Creating a GeoJSON layer with the retrieved data
    // L.earthquakeJson(data)
    console.log(data)
  })



