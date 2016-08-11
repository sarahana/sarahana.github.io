
        
function myFunction(){
    alert("Welcome and have a nice day!");
}
//how to comment out in jawa//

function initMap() {
        var myLatLng = {lat: 40.792256, lng: -74.273694};
        var TS = {lat: 40.759011, lng: -73.984472};
        var madisonSG = {lat: 40.739975, lng: -73.659573};
        var grandCS = {lat: 40.752820, lng: -73.977204};
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: myLatLng,
            zoom: 8
            
        });
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
        var contentHome = '<h3>Jersey Home</h3>'+
        '<p>This is the home that I <br>grew up in.</p>'
        var infoWHome = new google.maps.InfoWindow({content: contentHome});
        marker.addListener('click', function() {infoWHome.open(map, marker);});
        var marker2 = new google.maps.Marker({
            position: TS,
            map: map,
        });
        var marker3 = new google.maps.Marker({
            position: madisonSG,
            map: map,
        });
        var marker4 = new google.maps.Marker({
            position: grandCS,
            map: map,
        });
        //To add the marker to the map, call setMap();
        marker.setMap(map);
      }
