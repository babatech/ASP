var exports = {};

var dbcon = require('../config/db.js');
var dbconn = dbcon.connectdb();
exports.login = function(email,password) {
    var userdetails = { name:email, password:password};
    if ( dbconn == null ) console.log('still nul');
    else console.log('not nul');

    dbconn.query("SELECT * FROM users where email = '"+email+"' and password = '"+password +"'", function (err, result) {
        if(err)
        {
            console.log(result[0]+' err');
            return null;
        }
        else {
            console.log(result[0] + ' ress' );
            console.log('query ok');
            return result[0];
        }
        // console.log('The solution is: ', result); // object difference result is same
    });
};

exports.fblogin = function(email,profileid) {

    var userdetails = { name:email, password:profileid};
    dbconn.query("SELECT * FROM users where email = '"+email+"' and password = '"+password +"'", function (err, result) {
        if(err)
        {
            console.log(result[0]+' err');

            var userdetails = { name:email, password:profileid};
            dbconn.query('INSERT INTO users  SET ?', userdetails, function(err,res){
                if(err)
                {console.log('err in insert fb');
                }
                else {
                console.log('inserted fb');

                }

                return null;
            });
        }
        else {
            console.log(result[0] + ' ress' );
            console.log('query ok');
        }
        // console.log('The solution is: ', result); // object difference result is same
    });
};
exports.createuser = function(email,password){

    if(dbconn ==null)
        console.log('null');else
        console.log('not null');

    var userdetails = { name:email, password:password};

    dbconn.query('INSERT INTO users  SET ?', userdetails, function(err,res){
        if(err)
        {
            // throw err;
           return null;
        }
        else {

            console.log('Last insert ID:', res.insertId);
            return true;
        }
    });

};

module.exports = exports;