/**
 * Created by Shoaib on 11/12/2016.
 */
// config/auth.js
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1564108353615682', // your App ID
        'clientSecret'  : '313b51e736d5c9754bd8575885fce1e1', // your App Secret
        'callbackURL'   : 'http://localhost:3000/loginfacebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },


};