
//////  HW SCRIPT //////////////
////////////////////////////////

// Creating the map object
// Using Cheyenne, WA as center point
var myMap = L.map("map", {
    center: [41.1400, -104.8202],
    zoom: 5
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);


var earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

var earthquakeJson

// Getting our GeoJSON data
d3.json(earthquakeData).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    // L.earthquakeJson(data)
    console.log(data)
  })



