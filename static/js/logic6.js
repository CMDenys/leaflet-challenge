
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
    

    function getColor(myColor) {
        if (myColor <= 2.5) {
            myColor = "lightgreen"
        }
        else if (myColor > 2.5 && myColor <= 5.4) {
            myColor = "green"
        }
        else if (myColor >= 5.5 && myColor <= 6) {
            myColor = "darkgreen"
        }
        else if (myColor >= 6.1 && myColor <= 6.9) {
            myColor = "yellow"
        }
        else if (myColor >= 7 && myColor <= 7.9) {
            myColor = "orange"
        }
        else if (myColor >= 8) {
            myColor = "red"
        }    
        return myColor
    }

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
        onEachFeature: function(feature, layer) {
           layer.bindPopup(`<h2>${feature.properties.place}</h2><hr><h2>Magnitude: ${feature.properties.mag}</h2>`)
        
        }

    }).addTo(myMap)

    
    var legend = L.control({position: "bottomright"});
    
    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            quakes = [1, 2, 3, 4, 5, 6, 7, 8],
            labels = [['<strong> Earthquake Magnitude </strong>']],
            from, to;

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < quakes.length; i++) {
            from = quakes[i];
            to = quakes[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'))
        }

        div.innerHTML = labels.join('<br>');
        return div;
        
    };
    legend.addTo(myMap);
}) 


    




    
  