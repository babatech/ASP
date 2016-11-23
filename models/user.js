/**
 * Created by Shoaib on 11/05/2016.
 */
// models/user.js
// load the things we need
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = {

    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

};



// create the model for users and expose it to our app
//module.exports = mongoose.model('User', userSchema);
module.exports = userSchema;