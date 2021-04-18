
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
    console.log(data)
    function getRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        } 
        return magnitude * 4;
    }

  function getColor()

    //Create object (array of features)
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return new L.CircleMarker(latlng, {radius: 8, 
                fillOpacity: 1, 
                color: 'black', 
                fillColor: getColor(feature.properties.mag),
                weight: 1,
                radius: getRadius(feature.properties.mag)
            });
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopUp(feature.properties.mag);
        }

    }).addTo(myMap);
});


// function getRadius(magnitude) {
   
//   <!-- LAYERS/SITES ADD LAYER->
//   L.geoJson(sites, {
//       pointToLayer: function (feature, latlng) {
      
//       onEachFeature: siteslabels
//   }).addTo(map);



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