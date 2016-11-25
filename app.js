var express = require('express');
var session = require('express-session');
var socket_io = require('socket.io');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sanitizer = require('sanitizer');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCPRT3eQNIcTUgj5mSHT5AA6qJ_NG3MCj4'
});
var passport = require('passport');
var flash = require('connect-flash');
outputarr = [];

require('./config/passport')(passport); // pass passport for configuration
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// socket.io
var io = socket_io();
app.io = io;

var usernames={};
var rooms = ['Kiel, Germany', 'Hamburg, Germany'];

// view engine setup

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hjs');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// required for passport
app.use(session({
    secret: 'shoaibishappyinkiel',
    resave: true,
    saveUninitialized: true
} )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

io.on('connection', function(socket){
  console.log('new user connected');

  socket.on('data', function(data){
    // limit chars
    data.message = data.message.substring(0,200);

    // sanitaze html
    data.message = sanitizer.escape(data.message);

    io.emit('data', data);
    console.log('message:' + data.message);
  });
  socket.on('user-position', function(data){

    // sanitaze html
    data.lat = sanitizer.escape(data.lat);
    data.lng = sanitizer.escape(data.lng);
    //getnearbyPlaces(data);
    //io.emit('nearbyplaces', outputarr);
    console.log(outputarr);
    console.log('location:' + data.lat +":"+ data.lng);
  });

  socket.on('login-user-request', function(data){
    /*
     @Todo: daniyal
     yah app ka starting point hai yaha app ko login k data malay ga
     */


    console.log(data);

  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  /*
   @todo waqar
   this the function where share location form submission is handled
   */
  socket.on('user-share-location', function(data){

    // search for spacific user in active user list on site
    // if user exit then this emait

    io.emit('get-user-location-request', data);
    // else send back user a massge that user not exist

    io.emit('share-user-not-online', data);

  });
  socket.on('update-user-position', function(data){




    io.emit('receive-share-user-position', data);

  });
  /*
  areeb sokcet
   */
    socket.on('usrname', function (data) {
 //       socket.emit('usr', data);
        socket.username = data;
        usernames[data] = data;
        socket.emit('usr', socket.username)
        socket.room = 'room 1';
        socket.join('room 1');
        socket.emit('msg', 'you have connected to room 1');
        socket.broadcast.to(socket.room).emit('msg', data + ' has connected to room 1')
    });
    socket.on('chatmessage', function (data) {
        io.sockets.in(socket.room).emit('msg',socket.username, data);
        //socket.emit('data', data);
        console.log(data)});
  /*
  areeb sokcet
   */
});

// Geocode an address.
/*googleMapsClient.geocode({
 address: '1600 Amphitheatre Parkway, Mountain View, CA'
 }, function(err, response) {
 if (!err) {
 console.log(response.json.results);
 }
 });*/

function  getnearbyPlaces(position,type) {
  outputarr = [];
  googleMapsClient.placesNearby({
    location: [position.lat, position.lng],
    opennow: true,
    radius: 3000,
    type: 'museum'
  }, function(err, response) {
    if (!err) {
      processnearbyplace(response.json.results);
      io.emit('nearbyplaces', outputarr);
    }
  });

  //console.log(outputarr);
}

function processnearbyplace(result){

  for (var i = 0; i < result.length; i++) {
    var obj = result[i];
    temp = {
      id: sanitizer.escape(obj['id']),
      place_id: sanitizer.escape(obj['place_id']),
      title: sanitizer.escape(obj['name']),
      geometry: sanitizer.escape(obj['geometry']['location']),
      lat:sanitizer.escape(obj['geometry']['location']['lat']),
      lan: sanitizer.escape(obj['geometry']['location']['lng']),
      icon: sanitizer.escape(obj['icon'])
    };

    //console.log(temp);
    outputarr.push(temp);


  }
}
function setUserDataInSession(data) {

}
module.exports = app;
