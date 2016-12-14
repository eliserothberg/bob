var express = require('express');
var router  = express.Router();
var mysqlcalls = require('../lib/mysqlCalls.js');
var Repopulate = require('../lib/repopulate.js');
console.log('in routes.js');
router.get('/sign-in', function(req,res) {
  console.log('sign-in from the routes file');
  res.render('users/sign_in');
});
router.post('/salesByMonth', function(req, res) {
	console.log('Graph from the routes file');
	var conditions2 = ["New Business", "Upsell/New Sale to Existing Project"];
	console.log(req.body.startDate);
	console.log(req.body.endDate);
	// var startDate="2016-01-01";
	// var endDate="2016-12-05";
	mysqlcalls(conditions2,req.body.startDate,req.body.endDate, res);
});

module.exports = router;
