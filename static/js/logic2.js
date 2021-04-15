
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


var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson"

// var earthquakeJson;

// // Getting our GeoJSON data
// d3.json(url).then(function(data) {




//   console.log(data)
// })


//from Shaun's saturday class

d3.json(url).then(function(data) {
  
  earthquakes = []
  
  for (var i = 0; i < data.features.length; i++) {
    var feature = data.features[0].geometry
    
    earthquakes.push(feature)

    console.log(feature)

    // if (feature) {
    //   L.marker([geometry.location.coordinates[1], geometry.location.coordinates[0]]).addTo(myMap);
    
  }
})






// data.features.map(feature => {
//   return feature.geometry.coordinates
// })
 

//or can use .forEach instead of map