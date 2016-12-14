// 'use strict'

// var request = require("request");
// // var Promise = require('bluebird');
// // var rp = require('request-promise');
// // var Deals = require('../models')["Deals"];
// // var Salespeople = require('../models')["Salespeople"];
// // var theList = require('../utils/key2.js');
// // var options = require('../utils/key.js');
// // var totalRecords = require('../utils/key.js');
// // var getData = require('../utils/key.js');
// // var auth = require('../utils/key3.js');
// // var moment = require("moment");
// // moment().format();
// var chai = require("chai");
// var mocha = require("mocha");
// var connection = require('../connection/connection.js');
// var expect = require('chai').expect;
// var chaiHttp = require('chai-http');
// var Nightmare = require('nightmare');
// var should = require('chai').should();

// describe('Registered user logs in', function() {
//   this.timeout(60000);

// // var url = 'http://localhost:3000';

//   it('should allow user to log in', function(done) {
//     var nightmare = new Nightmare({
//       show: true
//     });
//     // nightmare
//   //     .goto('http://localhost:3000')
//   //     .wait()
//   //     .click('#myBtn2')
//   //     // .wait('a[href*="/users/sign-in"]')
//   //     .evaluate(function() {
//   //       return document.title;
//   //     })
//   //     .end()
//   //     .then(function(result) {
//   //       result.should.equal('eMinder');
//   //       done();
//   //     })
//   //     .catch(function(err) {
//   //       console.error("Go to log in not working");
//   //       done(err);
//   //     });
//   // });

//   // it('should go to events page after login', function(done) {
//   //   var nightmare = new Nightmare({
//   //     show: true
//   //   });
//     nightmare
//       .goto('http://localhost:3000')
//       // .wait('a[href*="/users/events"]')
//       .wait('a[href*="/events"]')
//       // .click('a[href*="/users/events"]')
//       .click('a[href*="/events"]')
//       .wait('#em')
//       .type('#em', 'bob@gmail.com')
//       .type('#pass', 'bob')
//       .click('.button_base b05_3d_roll')
//       .wait("#myBtn2")
//       .evaluate(function() {
//         return document.querySelectorAll('#myBtn2')[0].innerText;
//       })
//       .end()
//       .then(function(result) {
//         result.should.contain('Log Out');
//         done();
//       })
//       .catch(function(err) {
//         console.error("Log in not working");
//         done(err);
//       });
//   });
// });


// describe('Sign out', function() {
//   this.timeout(60000);

// it('should allow user to sign out', function(done) {
//     var nightmare = new Nightmare({
//       show: true
//     });
//     nightmare
//       .goto('http://localhost:3000/events')
//       .wait('a[href*="/users/sign-out"]')
//       .click('a[href*="/users/sign-out"]') 
//       .wait('#logo')
//       .evaluate(function() {
//         return document.querySelectorAll('#logo')[0].innerText;
//       })
//       .end()
//       .then(function(result) {
//         result.should.contain('SIGN IN');
//         done();
//       })
//       .catch(function(err) {
//         console.error("Sign out not working");
//         done(err);
//       });
//   });
// });