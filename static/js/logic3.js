
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


d3.json(url).then(function(data) {
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
        }

    }).addTo(myMap);
});






        // earthquakes = {}
        // earthquake = data.features

        // for (var i = 0; i < earthquake.geometry.coordinates.length; i++) {
        //     var something = earthquake[0].geometry.coordinates[i]
        //     console.log(something)
    //     }
    // })




    // console.log(earthquake[0].geometry.coordinates)


  
  
   // data.features.map(features => {
    //   return features.geometry.coordinates
    
  
  
  
   
  
  //or can use .forEach instead of map