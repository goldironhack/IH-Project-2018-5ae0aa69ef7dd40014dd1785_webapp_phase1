var map;
var Ulat = 40.7291, Ulng = -73.9965;
//NY districts geoshapes
var NYdistrictsGeo = "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";
//Neighborhood names gis
var NYnames = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: Ulat, lng: Ulng},
          zoom: 10
        });
        var uniMarker = new google.maps.Marker({
          position: {lat: Ulat, lng: Ulng},
          map: map,
          title: 'uniMarker'
        });
    map.data.loadGeoJson(NYdistrictsGeo);
    map.data.setStyle(function(feature) {
      var id = feature.getProperty('OBJECTID');
      var clr = ['red','blue','green','yellow','black']
      console.log(id);
      var color = clr[id%5];
      return {
        fillColor: color,
        strokeColor: color,
        strokeWeight: 1
      };
    });
  map.data.addListener('mouseover', function(event) {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, {strokeWeight: 4});
  });
  map.data.addListener('mouseout', function(event) {
    map.data.revertStyle();
  });
      }
