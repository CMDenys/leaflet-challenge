
In this project, GeoJSON was used as a live, programatic interface to build a tool that showed significant earthquakes that had occured in the past 24 hours.  The GeoJSON feed is from the USGS' Earthquake Hazards Program and is of the type FeatureCollection.  

Using D3.js and the .then() method, the url can be called with a promise to execute the next step in the function.  

<p align="center">
  <img src="images/var_url.png" width="500" />
</p>

To make sure that data is feeding in correctly, console.log() is used.

<p align="center">
  <img src="images/url.png" width="500" />
</p>

Now that we know the data is coming in correctly, a base tile layer needs to be created.  This layer provides the map for any images to sit on top of.  Because the majority of earthquakes happen on the west coast, I chose to use Albuquerque, NM as the center point.


<p float="left" align="center">
  <img src="images/tilelayer.png" width="400" />
  <img src="images/map_center.png" width="400" /> 
</p>
