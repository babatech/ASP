var mysql = require('mysql');

var settings = require('./config');
var db;
var exports = {};
//exports.connectdb = function () {
    // if (!db){
        db = mysql.createConnection(settings.onlineDatabase);

        db.connect(function(err){

            if(!err) {
                console.log('Database is connected!');
                return db;
            } else {
                console.log('Error connecting database!'+err);
                return null;
            }
        });
    // }
//}

module.exports = db;
