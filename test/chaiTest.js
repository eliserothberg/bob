// <script src="chai.js" type="text/javascript"></script>
// var server = require('../project3server.js');
// var request = require("request");
// var Promise = require('bluebird');
// var rp = require('request-promise');
// var Deals = require('../models')["Deals"];
// var Salespeople = require('../models')["Salespeople"];
var theList = require('../utils/key2.js');
// var options = require('../utils/key.js');
// var totalRecords = require('../utils/key.js');
var getData = require('../utils/key.js');
var getDeals=require("../lib/getDeals.js");
// var auth = require('../utils/key3.js');
// var moment = require("moment");
// moment().format();
var chai = require("chai");
var mocha = require("mocha");
var connection = require('../connection/connection.js');
var server = require('../server.js');
var should = chai.should();
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
// var categories = require('./categories.json');
var sampleData = require('./sampleData.json');
var medianDealSize = require("../lib/medianDealSize.js");
var monthlySalesByPerson=require("../lib/monthlySalesByPerson.js");
var mysqlCalls=require("../lib/mysqlCalls.js");
var mysqlVersion=require("../lib/mysqlVersion.js");
var newBusiness=require("../lib/newBusiness.js");
var revenueByProductLine=require("../lib/revenueByProductLine.js");
var salesByMonth=require("../lib/salesByMonth.js");
var sqlrtrvl=require("../lib/sqlrtrvl.js");
var Deals = require('../models')["Deals"];
var router = require('../routes/routes');



'use strict';


  // the test will fail but if it does, you know it's
  // found the function.


chai.use(chaiHttp);

// describe('getDeals', () => {
    
// /*
//   * Test the /GET route
//   */
//   describe('/', () => {
//       it('it should GET all the deals', (done) => {
//         chai.request(server)
//             .get('/')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.eql(0);
//               done();
//             });
//       });
//   });

// });

describe('getOrElse', function(err, res, category) {
  it('should get title of "Campaigns"', function () {
    console.log("category.fields[12].name = " + category.fields[12].name);


      expect(theList(category.title)).to.equal('Campaigns')
  });
  it('should get "Vertical" field', function () {
      expect(theList(category.fields[12].name)).to.equal('Vertical')
  });
});

describe('getOrElse', function(err, res, category) {
  it('should get title of "Campaigns"', function () {
    console.log("category.fields[12].name = " + category.fields[12].name);


      expect(theList(category.title)).to.equal('Campaigns')
  });
  it('should get "Vertical" field', function () {
      expect(theList(category.fields[12].name)).to.equal('Vertical')
  });
});

describe('getOrElse', function(err, res, category) {
  it('should get title of "Campaigns"', function () {
    console.log("category.fields[12].name = " + category.fields[12].name);


      expect(theList(category.title)).to.equal('Campaigns')
  });
  it('should get "Vertical" field', function () {
      expect(theList(category.fields[12].name)).to.equal('Vertical')
  });
});

describe('getData', function(totalRecords) {
  it('should be an object', function () {
      expect(getData(totalRecords)).to.be.a('Object')
    });
  it('should be unix', function () {
      expect(getData(totalRecords.process_close_date)).to.be.a('unix')
    });
  });
describe('medianDealSize', function(attributes, searches, startDate, endDate) {
  it('should give median deal size', function() {
    var deals=[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
    var median = deals[Math.floor(deals.length/2)];
      expect(median).to.equal(600)
    });
  });
describe('maxMinRevenue', function(attributes, searches, startDate, endDate) {

  it('should give max and min revenue', function() {
  
  expect(maxMinRevenue()).to.equal()
  });
});
  it('should list sales total by salesman');
  it('should show total ytd sales by salesperson');
  it('should show total ytd sales by salesperson');
  it('should show quota per salesperson');
  it('should show monthly sales figures');
  it('should show seasonal/quarterly sales figures');
  it('should show monthly sales per salesperson');
  it('should show seasonal sales per salesperson');
  it('should show yearly sales per salesperson (if applicable)');
  it('should show average sales during company tenure (if applicable)');
  it('should show type of new business- monthly');
  it('should show type of new business- quarterly');
  it('should show type of new business- yearly');
  it('should show Sales cycles (time between open and close)');
  it('should show shortest sales cycle with revenue figures');
  it('should show highest revenue deals');
  it('should show highest revenue deals and sales cycle');
  it('should show lowest revenue deals');
  it('should show lowest revenue deals and sales cycle');
  it('should show salesperson with highest revenue deals');
  it('should show salesperson with highest revenue deals and sales cycle');
  it('should show salesperson with lowest revenue deals'); 
  it('should show salesperson with lowest revenue deals and sales cycle');
  it('should show revenue per product line');
  


// expand to:

// it('should list ALL blobs on /blobs GET', function(done) {
//   chai.request(server)
//     .get('/blobs')
//     .end(function(err, res){
//       res.should.have.status(200);
//       done();
//     });
// });
//   multiply = function (x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number')
//       throw new Error('x or y is not a number.');
//     else
//       return x * y;
//   };

// describe('Multiply', function () {
//   it('should multiply properly when passed numbers', function () {
//     multiply(2, 4).should.equal(8);
//   });

//   it('should throw when not passed numbers', function () {
//     (function() { multiply(2, "4") }).should.throw(Error);
//   });
// });



// var disemvowel = require('../disemvowel');

// describe("disemvowel", function() {
//   it("removes vowels from a word", function(){
//     expect(disemvowel('frog')).to.equal('frg');
//   });

//   it("does nothing to words that don't have vowels", function() {
//     expect(disemvowel('rhythm')).to.equal('rhythm');
//   });

//   it("disemvowels capital letters too", function() {
//     expect(disemvowel("AARDVARK")).to.equal("RDVRK");
//   });

//   it("removes vowels from phrases", function(){
//     expect(
//       disemvowel('A long time ago in a Galaxy far far away')
//     ).to.equal(' lng tm g n  Glxy fr fr wy');
//   }); 
// });