var express = require('express');
var router = express.Router();
header = [];
header["sitetitle"] = "City Guide";

user = [];
user['name'] = "John Snow";
user['avatar'] = "image link";
user['status'] = true;
user['loginStatus'] = true;




/* GET home page. */
router.get('/', function(req, res, next) {
    header["title"] = 'Home';
    res.render('index', { header: header,user: user,title: 'khlo tari' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
    header["title"] = 'About Us';
    res.render('about', { header: header });
});
/*
@todo: areeb
this is your page for chat and url is  http://localhost:3000/chat

 */

router.get('/chat', function(req, res, next) {
    header["title"] = 'Chat with people around you';
    res.render('chat', { header: header });
});

/*
@todo: Waqar
this is your page for location share and url is  http://localhost:3000/sharelocation
The idea is on this page user will be shown a email form
where he/she can enter the email of person
whom he/she can share his/her location

 */
router.get('/sharelocation', function(req, res, next) {
    header["title"] = 'Share location with your buddy';
    res.render('sharelocation', { header: header });
});

module.exports = router;
