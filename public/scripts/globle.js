/**
 * Created by shahab on 10/7/2016.
 */


// initialize the library with the API key
FB.init({ appId:'524562497683320' });

// fetch the status on load
FB.getLoginStatus(handleSessionResponse);

$('.btn-login-facebook').bind('click', function() {
    FB.login(handleSessionResponse);
});

/*
$('#logout').bind('click', function() {
    FB.logout(handleSessionResponse);
});*/

// handle a session response from any of the auth related calls
function handleSessionResponse() {
    FB.api('/me', function(response) {
        console.log(response);
        $('#user-info').html(response.id + ' - ' + response.name);
    });
}



var socket = io();
var map;
var pos;
var placeService;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 0, lng: 0}
    });
    placeService = new google.maps.places.PlacesService(map);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
            map.setZoom(12);

            //searchNearbyAttarctions(pos);
            socket.emit('user-position', pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

$(document).ready(function(){
    initMap();
    var lastSend = 0;
    $("#send-message").submit(function(event) {
        if(pos==null) return false;

        event.preventDefault();
    });

    $('#form').submit(function(){
        socket.emit('chatmessage', $('#m').val());
        $('#m').val('');
        return false;
    });

});
socket.on('connect', function () {
    socket.emit('usrname', prompt("What is your name ? "));
});

socket.on('usr', function (data) {
    socket.username = data;
});

socket.on('msg' ,function (data) {
    //$('#messages').append(socket.username, " : "+data+"<br/>");
    $('#startingdescription').append(socket.username, " : "+data+"<br/>");
    var infoWindow = new google.maps.InfoWindow({map: map});
    infoWindow.setPosition(pos);
    infoWindow.setContent(data);
    setTimeout(function(){infoWindow.close();}, '5000');
});


 socket.on('nearbyplaces', function(data){

     for (var i = 0; i < data.length; i++) {

     var place = data[i];
     var latLng = new google.maps.LatLng(place.lat, place.lng);
     // Creating a marker and putting it on the map
     var marker = new google.maps.Marker({
         position: latLng,
         map: map,
         title: place.title,
         icon: place.icon
        });
     }

 });
socket.on('data', function(data){
    var infoWindow = new google.maps.InfoWindow({map: map});
    var position = data.pos;
    var message = data.message;
    message = message.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a target='_blank' href='$1'>$1</a>");

    infoWindow.setPosition(position);
    infoWindow.setContent(message);

    setTimeout(function(){
        infoWindow.close();
    }, 5000);
});



function searchNearbyAttarctions(position) {
    var latLng = new google.maps.LatLng(position.lat, position.lng);
    placeService.nearbySearch({
        location: latLng,
        radius: 2000,
        type: ['night_club']
    }, processNearbyAttarctions);
    placeService.nearbySearch({
        location: latLng,
        radius: 2000,
        type: ['museum']
    }, processNearbyAttarctions);
    placeService.nearbySearch({
        location: latLng,
        radius: 2000,
        type: ['zoo']
    }, processNearbyAttarctions);
    placeService.nearbySearch({
        location: latLng,
        radius: 2000,
        type: ['aquarium']
    }, processNearbyAttarctions);
    placeService.nearbySearch({
        location: latLng,
        radius: 2000,
        type: ['amusement_park']
    }, processNearbyAttarctions);
    placeService.nearbySearch({
        location: latLng,
        radius: 2000,
        type: ['art_gallery']
    }, processNearbyAttarctions);

}

function processNearbyAttarctions(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    makePanel(place);
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location/*,
        icon:place.icon*/
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

function makePanel(place) {
    //console.log(place);
    var newpanel = document.createElement("div");
    newpanel.className="panel panel-default";
    newpanel.id=place.id;

    var newpanelbody = document.createElement("div");
    newpanelbody.className="panel-body";

    var newpanelbodyrow = document.createElement("div");
    newpanelbodyrow.className="row";

    var newpanelbodycolimage = document.createElement("div");
    newpanelbodycolimage.className="col-sm-4";
    newpanelbodycolimage.innerHTML='<img class="img-responsive" src="'+place.icon+'" alt="'+place.name+'" />';

    var newpanelbodycoldes = document.createElement("div");
    newpanelbodycoldes.className="col-sm-6";
    newpanelbodycoldes.innerHTML='<p><strong>'+place.name+'</strong></br>'+place.name+'</p>';


    newpanelbodyrow.appendChild(newpanelbodycolimage);
    newpanelbodyrow.appendChild(newpanelbodycoldes);


    newpanelbody.appendChild(newpanelbodyrow);
    newpanel.appendChild(newpanelbody);

    addPanel(newpanel);

}



function addPanel(newpanel) {
    $(newpanel).insertAfter(".add-after-panel");
}