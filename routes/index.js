var express = require('express');
var router = express.Router();
var header = [];
header["sitetitle"] = false;

var user = [];




/* GET home page. */
router.get('/', function(req, res, next) {
    header["title"] = 'yo this is home';
  res.render('index', { header: header,user: user,title: 'khlo tari' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
    header["title"] = 'About Us';
    res.render('about', { header: header });
});

module.exports = router;
