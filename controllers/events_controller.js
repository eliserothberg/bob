var bcrypt = require('bcryptjs');
var models = require('../models');
var express = require('express');
var router = express.Router();

var app = express();
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

console.log("*** events_controller");

var userId = 0;

var username = '';
var loggedIn = false;
var email = "";

// Display the events page
router.get('/', function(req, res) {
    var holder = [];
    // if session id defined, then set parameters to display events
    if (req.session.user_id != undefined) {
        userId = req.session.user_id;
        username = req.session.username;
        loggedIn = true;
        email = req.session.email;
    };

    if (userId == undefined || userId == 0) {
        res.render('./users/sign_in');
    } else {
        res.render('index');
    }
});



// router.get('/', function(req, res) {
//   res.render('index');
// });



module.exports = router;
