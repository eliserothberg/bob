var bcrypt = require('bcryptjs');
var models  = require('../models');
var express = require('express');
var router  = express.Router();

var app = express();
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//ADD API FUNCTIONALITY

//INPUT API key, choose to store encrypted on database-
//offer choice after we get it working with requiring storing encrypted key
//bcrypt and hash security enough.
//After that's working, look into doing tokens with JWT.

// login
router.post('/login', function(req, res) {
  console.log('at the login');
  console.log(req.body.email);
   return models.User.findOne({
    where: {email: req.body.email}
  }).then(function(user) {
console.log('at the sign in');
// console.log(user);
    if (user === null){
      console.log('the user is null');
      res.render('users/sign_in');
    }
console.log('at the bcrypt');
    // bcrypt compares user's password input with stored hash
    bcrypt.compare(req.body.password, user.password_hash, function(err, result) {
        if (result == true){
          console.log('in bcrypt');
          console.log(req.body.email);
          // we save the logged in status user id and email to the session
          req.session.logged_in = true;

      // req.session.username = req.body.email;
          req.session.username = user.username;
          req.session.user_id = user.id;
          userId=user.id;
          req.session.email = user.email;
          res.redirect('/events');
        }
        // if password invalid
        else{
          // redirect user to sign in
          res.redirect('/users/sign-in')
        }
    });
  })
});

// register a user
router.post('/create', function(req,res) {
  console.log('at the users');
  console.log(req.body.email);

  return models.User.findAll({
      where: {email: req.body.email}
  })
  .then(function(users) {
    console.log('checked users');
    console.log(users.length);
    if (users.length > 0){
      console.log(users)
      res.send('we already have an email or username for this account')
    } 
    else {
    console.log('creating the bcrypt');
      // Use bcrypt to generate a 10-round salt and then hash the user's password.
      return  bcrypt.genSalt(10, function(err, salt) {
      // var password;
      // var URL;
      // var authorization;
            // var foo = [password, URL, authorization];
            // console.log("foo[i] = " + foo[i]);
            // fooX = foo[i];
        bcrypt.hash(req.body.password, salt, function(err, hash) {
        // create new user and store info
          return models.User.create({
          username: req.body.username,
          email: req.body.email,
          password_hash: hash
          // URL_hash: URL,
          // authorization_hash: authorization
        })
        .then(function(user){
          //enter the user's session by setting properties to req.
          // and save the logged in status to the session
          req.session.logged_in = true;
          req.session.username = user.username;
          // req.session.user_id = user.id;
          req.session.email = user.email;
              // redirect to home on login
          res.redirect('/events')
        });
      });
    });
  }
})
})

router.get('/sign-out', function(req,res) {
  req.session.destroy(function(err) {
     res.redirect('/');
  })
});

module.exports = router;
