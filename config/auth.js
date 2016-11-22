/**
 * Created by Shoaib on 01/21/2016.
 */
// config/auth.js
module.exports = {

    'facebookAuth' : {
        'clientID'      : '499247396909833', // your App ID
        'clientSecret'  : '4d3f997d3839df0361f93cc3488f46a0', // your App Secret
        'callbackURL'   : 'http://localhost:3000/loginfacebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};