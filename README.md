
In this project, GeoJSON was used as a live, programatic interface to build a tool that showed significant earthquakes that had occured in the past 24 hours.  The GeoJSON feed is from the USGS' Earthquake Hazards Program and is of the type FeatureCollection.  

Using D3.js and the .then() method, the url was called with a promise to execute the next step in the function.  

<p align="center">
  <img src="images/var_url.png" width="700" />
</p>

To make sure that data was feeding in correctly, console.log() was used.

<p float="left" align="center">
  <img src="images/url.png" width="375" />
  <img src="images/data.png" width="500" /> 
</p>

Once it was confirmed that the data was coming in correctly, a base layer was created.  This layer provided the base map for any images to sit on top of.  Because the majority of earthquakes happen on the west coast, Albuquerque, NM was chosedn as the center point.

<p float="left" align="center">
  <img src="images/tilelayer.png" width="700" />
  <img src="images/map_center.png" width="375" /> 
</p>

Using the inspector, it could be seen that D3 returned the data as an object.  The object that was returned was an array of objects (bbox, features, and metadata).  From here, anonymous functions were created using D3's .then() promise to first pull the data and then run each of the specified functions below:

<hr>

The first function <strong>getRadius</strong> was used to show the strength of the magnitude of each earthquake.  The bigger the earthquake, the larger the marker would be.  To adjust the size, a multiple of 4 was used.
<p align="center">
  <img src="images/mag_function.png" width="450" />
</p>

Additionally, a function called <strong>getColor</strong> was used to add color to the magnitude of each earthquake.  The color scheme starts with light green representing the least severe earthquakes and ends with red representing the most severe earthquakes.  

<p align="center">
  <img src="images/color_function.png" width="400" />
</p>

Both the <strong>getRadius</strong> and the <strong>getColor</strong> functions were included in the "fillColor" and "radius" options for the <strong>circleMarker</strong> layer, which can be found in the <strong>pointToLayer</strong> below.

Next, a <strong>geoJson</strong> layer was created including Leaflet's <strong>pointToLayer</strong> and <strong>onEachFeature</strong> options to create the earthquake markers and bindPopups.  For both options, the functions were internally called when the data was added by passing the GeoJSON point feature and its LatLng.  

<p align="center">
  <img src="images/geojson_marker.png" width="750" />
</p>

<p float="left" align="center">
  <img src="images/1_usMap.png" width="500" />
  <img src="images/2_popUp.png" width="375" /> 
</p>

Finally, using a <strong>control layer</strong> a legend was created and placed in bottom right corner.  To seperate the labels and colors, a for loop was used to iterate through the the density intervals and generate a label with a colored square for each interval.

<p align="center">
  <img src="images/legend.png" width="700" />
</p>

<hr>

In order to be able to see the outputs of each function, they were added to the map layer, which was assigned to the variable <strong>"myMap"</strong>.  The "myMap" variable was then stored in the div <strong>map</strong>.

<p align="center">
  <img src="images/map_div.png" width="500" />
</p>

The following libraries also needed to be added to the html page in order to run D3 and Leaflet.

<p align="center">
  <img src="images/html.png" width="800" />
</p>

  
  

