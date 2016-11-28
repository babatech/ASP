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

/* bind click to logout button daniyal syed Ali
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
var userinfo =[];
var map;
var pos;
var placeService;
var geocoder;
var autocomplete;
var cityn;
var positionTimer,usermarker,shareusermarker;


function initMap() {
    var mapelemtn =document.getElementById('map');
    if (typeof mapelemtn !== 'undefined'){
        //alert();
    }
    if(typeof map === 'undefined' && typeof mapelemtn !== 'undefined' ){

        map = new google.maps.Map(mapelemtn, {
            zoom: 2,
            center: {lat: 0, lng: 0}
        });
    }
    if(typeof geocoder === 'undefined'){
        geocoder = new google.maps.Geocoder;
    }
    if(typeof placeService === 'undefined'){
        placeService = new google.maps.places.PlacesService(map);
    }
    if(typeof autocomplete === 'undefined'){

        autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchcity'), { types: [ 'geocode' ] });
        google.maps.event.addListener(autocomplete, 'place_changed', function() {

            var place = autocomplete.getPlace();
            console.log(place);

            var lat = place.geometry.location.lat(),
                lng = place.geometry.location.lng();
            pos = {
                lat: lat,
                lng: lng
            };
// Then do whatever you want with them
            toggleMapPlanPanle();
            setUserPosition(pos);
            console.log(lat);
            console.log(lng);
        });
    }
}
function getbrowserGeolocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            setUserPosition(pos)
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
function RefershUSERGeolocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            //setUserPosition(pos)
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
function  setUserPosition(position) {
    initMap();
    var latLng = new google.maps.LatLng(position.lat, position.lng);
    // Creating a marker and putting it on the map
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "Your location",
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });
    userinfo["userLocation"]=position;
    geocodeLatLng(position);
    map.setCenter(position);
    map.setZoom(12);
    addMarker(marker,"Your location");
    //searchNearbyAttarctions(pos);
    socket.emit('user-position', pos);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
function addMarker(marker,contentString) {
    if(contentString.undefined){
        alert("contentString undefined");
    }
    if(marker.undefined){
        alert("marker undefined");
    }
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
function setStartLocation(position,name,placeobj) {
    userinfo["startLocation"]=[];
    userinfo["startLocation"]["coord"]=position;
    userinfo["startLocation"]["name"]=name;
    userinfo["startLocation"]["placeobj"]=placeobj;
    $("#startingdescription").text(name);

}
function setEndLocation(position,name,placeobj) {
    userinfo["endLocation"]=[];
    userinfo["endLocation"]["coord"]=position;
    userinfo["endLocation"]["name"]=name;
    userinfo["endLocation"]["placeobj"]=placeobj;
    $("#endingdescription").text(name);

}
function geocodeLatLng(position) {
    geocoder.geocode({'location': position}, function(results, status) {
        if (status === 'OK') {
            if (results[1]) {
                setStartLocation(position,results[1].formatted_address,results[1]);
                socket.emit("cityn", results[1].formatted_address);
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}
function toggleMapPlanPanle() {
    if(typeof pos !== 'undefined'){
        $( ".map-plan-panel" ). toggleClass( "hidden" );
        $( ".map-city-panel" ). toggleClass( "hidden" );
        //alert("not empty");
    }else{
        //alert("empty");
    }

}

$(document).ready(function(){
    initMap();
    var lastSend = 0;
    // local-login
    $("#send-message").submit(function(event) {
        if(pos==null) return false;

        event.preventDefault();
    });
    $( ".toggle-map-plan-panel" ).click(function() {
        toggleMapPlanPanle()
    });
    $( ".get-current-location" ).click(function() {
        getbrowserGeolocation();
    });
    /*
    @todo:waqar
    this the function for submiting user input for email and user location
    and see app.js file for server side function for handling the user submission
     */
    $("#shareLocationForm").submit(function(event) {
        //return false;
        if($(".shareLocationEmail").val()!=null ){

            watchCurrentPosition();

            var shareLocation = {
                pos: pos,
                email: $(".shareLocationEmail").val()
            };
            socket.emit('user-share-location', shareLocation);
            //$( ".map-share-panel" ). toggleClass( "hidden" );
            $( ".share-location-buddy" ). toggleClass( "hidden" );
        }


        event.preventDefault();
    });
    function watchCurrentPosition() {
        positionTimer = navigator.geolocation.watchPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            if (typeof usermarker === 'undefined'){
                usermarker = new google.maps.Marker({
                    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    map: map,
                    title: "Your location",
                    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                });
                addMarker(usermarker,"your location");
                setUserPosition(pos);
                console.log("check watch");
            }


            setMarkerPosition(usermarker, position);
            socket.emit('update-user-position', position);
        });
    }



/*
areeb ready function area start
 */
    $('.chatInCityForm').submit(function(){
        socket.emit('chatmessage', $('#m').val());
        $('#m').val('');
        return false;
    });
    $( ".startchatbtn" ).click(function() {
        socket.emit('usrname', prompt("What is your name ? "));
        $( ".formUserChat" ). toggleClass( "hidden" );
        $( ".startchatpanel" ). toggleClass( "hidden" );

    });

/*
areeb ready function area end
 */

    /*window.setInterval(function(){
        /// call your function here
        RefershUSERGeolocation();
    }, 2000);*/


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

/*
@todo: all, areeb,waqar,shoaib,daniyal,shahab,mir
add your frontend javascript here
 */

/*
areeb js function area start
 */
socket.on('connect', function () {
   // socket.emit('usrname', prompt("What is your name ? "));

});

socket.on('usr', function (data) {
    socket.username = data;
});

socket.on('msg' ,function (usr, data) {
    //$('#messages').append(socket.username, " : "+data+"<br/>");
    $('#startingdescription').append(usr, " : "+data+"<br/>");
    var infoWindow = new google.maps.InfoWindow({map: map});
    infoWindow.setPosition(pos);
    infoWindow.setContent(data);
    setTimeout(function(){infoWindow.close();}, '5000');
});

/*
areeb js function area end
 */
function setMarkerPosition(marker, position) {
    marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    console.log(position);
}
socket.on('share-user-request-accepted', function(data){
    usermarker = new google.maps.Marker({
        position: new google.maps.LatLng(data.coords.latitude, data.coords.longitude),
        map: map,
        title: "other user location"
    });
    addMarker(shareusermarker,"other user location");
});
socket.on('receive-share-user-position', function(data){
    setMarkerPosition(shareusermarker, data);
});

socket.on('get-user-location-request', function(data){
    // code for user share location request
    // if user accept request then redirect it to user http://localhost:300/sharelocation
    // else send server that user didnot want to share location with requested user
});
socket.on('share-user-not-online', function(data){
    alert("user not active on site");
});