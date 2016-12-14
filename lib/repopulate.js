var connection = require('../connection/connection.js');
// var schedule = require('node-schedule');

// var deleteDataDeals = new schedule.RecurrenceRule();
// deleteDataDeals.hour = 3;
// deleteDataDeals.minutes = 0;

// var dealDelete = schedule.scheduleJob(deleteDataDeals, function(){
//  console.log('X********\nThe answer to life, the universe\n');
//  function clearDataDeals() {
//     var queryString = 'DELETE FROM Deals';
//     connection.query(queryString, function (err, result) {
//     // if error throw it
//     if (err) throw err;
//     // if no error call the callback function with the query results
//     return false;
//   });
// }
// clearDataDeals();
// });

// var deleteDataSalespeople = new schedule.RecurrenceRule();
// deleteDataSalespeople.hour = 3;
// deleteDataSalespeople.minutes = 1;

// var salespeopleDelete = schedule.scheduleJob(deleteDataSalespeople, function(){
//  console.log('X********and everything!');
//  function clearDataSalespeople() {
//    var queryString = 'DELETE FROM Salespeople';
//    connection.query(queryString, function (err, result) {
//     // if error throw it
//     if (err) throw err;
//     // if no error call the callback function with the query results
//     return false;
//   });
// }
// clearDataSalespeople();
// });
 
// var repopulateData = new schedule.RecurrenceRule();
// repopulateData.hour = 3;
// repopulateData.minute = 0;
// repopulateData.second = 05;
 
// var j = schedule.scheduleJob(repopulateData, function(){
//   console.log('\n*********42!\n');
//   var salesData = require("./salesData.js");
// });

// var insertName = new schedule.RecurrenceRule();
// insertName.hour = 3;
// insertName.minute = 0;
// insertName.second = 20;
 
// var nameInsert = schedule.scheduleJob(insertName, function(){
//   console.log('\n*********mice!\n');
//    function updateNames() {
//      var queryString2 = 'UPDATE Deals INNER JOIN Salespeople ON Deals.salesperson = Salespeople.salesID ' +
//        'SET Deals.salesName = Salespeople.salesName';
//        connection.query(queryString2, function (err, result) {
  //     // if error throw it
  //     if (err) throw err;
  //     // if no error call the callback function with the query results
  //     return false;
  //   });
//    }
//  updateNames();
// });

var CronJob = require('cron').CronJob;
  // var salesData = require("./salesData.js");
var eraseDeals = new CronJob({
  cronTime:'05 09 17 * * *',

  onTick: function() {
  console.log('X********\nThe answer to life, the universe\n');
// function clearDataDeals() {
    var queryString = 'DELETE FROM Deals';
    connection.query(queryString, function (err, result) {
    // if error throw it
      if (err) throw err;
      // if no error call the callback function with the query results
      return false;
    });
  }, 
  start: false,
  timeZone: 'America/Los_Angeles'
});
eraseDeals.start();

var eraseSalespeople = new CronJob({
  cronTime:'10 09 17 * * *',

  onTick: function() {
    /* This function is executed when the job stops */
    console.log('X********and everything!');
    var queryString = 'DELETE FROM Salespeople';
      connection.query(queryString, function (err, result) {
      // if error throw it
      if (err) throw err;
      // if no error call the callback function with the query results
      return false;
    });
  }, 
  start: false,
  timeZone: 'America/Los_Angeles'
});
eraseSalespeople.start();

var repopulateTables = new CronJob({
  cronTime:'25 09 17 * * *',

  onTick: function() {
    console.log('\n*********42!\n');
    var salesData = require("./salesData.js");
  }, 
  start: false,
  timeZone: 'America/Los_Angeles'
});
repopulateTables.start();

var populateSalesNames = new CronJob({

  cronTime:'10 10 17 * * *',

  onTick: function() {
    console.log('X********and mice!');
    var queryString2 = 'UPDATE Deals INNER JOIN Salespeople ON Deals.salesperson = Salespeople.salesID ' +
      'SET Deals.salesName = Salespeople.salesName';
      connection.query(queryString2, function (err, result) {
      // if error throw it
      if (err) throw err;
      // if no error call the callback function with the query results
      return false;
    });
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
populateSalesNames.start();
 

// DELIMITER $$
//     CREATE EVENT IF NOT EXISTS clear_tables
//     ON SCHEDULE EVERY 1 DAY
//     STARTS (CURRENT_DATE() + INTERVAL 6 HOUR + INTERVAL 1 DAY)
//     ON COMPLETION PRESERVE ENABLE
//     DO
//     BEGIN
//       DELETE FROM sales_db.Deals;
//       DELETE FROM sales_db.Salespeople;
//     END $$ 

// DELIMITER ;