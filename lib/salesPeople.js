// var request = require("request");
// var Promise = require('bluebird');
// var rp = require('request-promise');
// var Deals = require('../models')["Deals"];
// var Salespeople = require('../models')["Salespeople"];
// var people = require('../utils/key2.js');
// var options = require('../utils/key.js');
// var totalRecords = require('../utils/key.js');
// var getData = require('../utils/key.js');
// var auth = require('../utils/key3.js');
// var theList = require('../utils/key.js');
// var salesID;
// var salesName;
// var salesperson;

// // function getNames() {
//   getData().then(function(totalRecords) {

//     // request(theList, function (err, res, category) {
//       var salesPeople = {};
//       var uniqueSalesperson = {};
//       var newSalesperson = [];
//       var bob = {};

//       for (var i=0;i<totalRecords.length;i++){
//         // if ((body.objects[i].fieldValues[0][0].raw == 12 || body.objects[i].fieldValues[0][0].raw == 8) && body.objects[i].fieldValues.process_close_date[0].raw >= 1451635200000) {

//         theSalesperson = totalRecords[i].fieldValues[1][0].raw;
//         newSalesperson.push(totalRecords[i].fieldValues[1][0].raw);
//         // }
//       }
//       var uniqueSalesperson = newSalesperson.filter(function(elem, pos) {
//       return newSalesperson.indexOf(elem) == pos;
//       });
//       // console.log("--Salespeople length = " + uniqueSalesperson.length);
//           // console.log("--Salespeople array = " + uniqueSalesperson);

//       var peopleArray = [];

//       for (var i=0;i<uniqueSalesperson.length;i++){

//         var boo = uniqueSalesperson[i];
//         rp.get({
//           uri: 'https://api.salesforceiq.com/v2/users/' + boo,        
//           headers: 
//           { 
//             'Authorization': auth,
//             'Content-type': 'application/json'
//           },
//             transform: function(body, res){
//               bob = JSON.parse(body);
//               return bob;
//             }
//           }).then(function(bob) {
//             salesPeople.salesID = bob.id;
//             salesPeople.salesName = bob.name;
//             // Salespeople.create(salesPeople);

//             // console.log(salesPeople.salesName);
//             // console.log(salesPeople.salesID);
//             console.log("\nin bob salesPeople = " + JSON.stringify(salesPeople));
//             return salesPeople;
//           }).then(function(foo) {
//                           console.log("in foo salesPeople = " + JSON.stringify(foo));

//             for (var i=0;i<totalRecords.length;i++) {

//               function getOrElseFields(obj, def) {
//                 if(!obj) {
//                   return def;
//                 } else {
//                   return obj[0].raw;
//                 }
//               }
        
//               salesperson = getOrElseFields(totalRecords[i].fieldValues[1], "blank");        
//               // name = (totalRecords[i].name, "blank");  
//         // console.log("salesperson = " + salesperson);
//             }

//             while (salesperson == foo.salesID) {
//               console.log("ids and name = " + salesperson + " : " + food.id + " : " + foo.name );
//               // console.log("salesperson = " + salesperson);
//               // console.log("salesPeople.salesID = " + salesPeople.salesID);

//             }
//           })
//           .catch(function (err) {
//           console.log("A salesID no longer correlates to a person.\n")  
//         })
//         }
//       })
//       // })
//   //   });
//   // });


      
  

// // // getData().then(function(totalRecords) {
// //  var salesPeople = {};
// //     var uniqueSalesperson = {};
// //     var newSalesperson = [];
// //     // var bob = {};

// //     for (var i=0;i<totalRecords.length;i++){
// //       // if ((body.objects[i].fieldValues[0][0].raw == 12 || body.objects[i].fieldValues[0][0].raw == 8) && body.objects[i].fieldValues.process_close_date[0].raw >= 1451635200000) {

// //       theSalesperson = totalRecords[i].fieldValues[1][0].raw;
// //       newSalesperson.push(totalRecords[i].fieldValues[1][0].raw);
// //       // }
// //     }
// //     var uniqueSalesperson = newSalesperson.filter(function(elem, pos) {
// //     return newSalesperson.indexOf(elem) == pos;
// //     });
// //     // console.log("--Salespeople length = " + uniqueSalesperson.length);
// //         // console.log("--Salespeople array = " + uniqueSalesperson);

// //     var peopleArray = [];

// //     for (var i=0;i<uniqueSalesperson.length;i++){

// //       var eachID = uniqueSalesperson[i];
// //       rp.get({
// //         uri: 'https://api.salesforceiq.com/v2/users/' + eachID,        
// //         headers: 
// //         { 
// //           'Authorization': auth,
// //           'Content-type': 'application/json'
// //         },
// //           transform: function(body, res){
// //             allIDs = JSON.parse(body);
// //             return allIDs;
// //           }
// //         }).then(function(allIDs) {
// //           salesPeople.salesID = allIDs.id;
// //           salesPeople.salesName = allIDs.name;
// //           // Salespeople.update(salesPeople);

// //           // console.log(salesPeople.salesName);
// //           // console.log(salesPeople.salesID);
// //           console.log("salesPeople = " + JSON.stringify(salesPeople) + "\n");
// //         })
// //         .catch(function (err) {
// //         console.log("A salesID no longer correlates to a person.\n")  
// //       })
// //     }
// // //   request(theList, function (err, res, category) {
// // // // function getNames() {
// // //    rp.get({
// // //           uri: 'https://api.salesforceiq.com/v2/users/' + salesperson,        
// // //           headers: 
// // //           { 
// // //             'Authorization': auth,
// // //             'Content-type': 'application/json'
// // //           },
// // //             json: true
            
// // //           }).then(function(people) {
// // //             // salesPeople.salesID = people.id;
// // //             bob.salesName = people.name;
// // //             bob.salesID = people.id;
// // //             // Salespeople.update(salesPeople);
// // //             // bob.salesName = salesName;
// // //             // bob.salesID = salesID;
// // //             // console.log("Name = " + bob.salesName);
// // //             //             console.log("ID = " + bob.salesID);
// // //    // console.log("salesperson = " + salesperson);
// // //    //          console.log("bob = " + JSON.stringify(bob));
// // //             // sam.push(bob);
// // //  sam = sam + (JSON.stringify(bob));

// // //             console.log("sam + bob = " + sam);
// // //                     // console.log("Process Create Date: " + createDate);
// // //                                 // console.log("bob type= " + typeof bob);
// // //             // console.log("sam = " + sam);
// // // if (bob.salesID == salesperson) {
// // //   salesName == bob.salesName;
// // //     // console.log("if bob sales: " + bob.salesID);
// // //     // console.log("bobsalesname: " + salesperson);
// // // }

// // //             // console.log("salesPeople = " + JSON.stringify(salesPeople) + "\n");
// // //           })
// // //           .catch(function (err) {
// // //           console.log("A salesID no longer correlates to a person.\n")  
// // //         })
// //         };
// //          // console.log("sam = " + JSON.stringify(sam));
// //             // console.log(JSON.stringify(people));

// //       });
// //       });
// // //  rp.get({
// // //           uri: 'https://api.salesforceiq.com/v2/users/' + salesperson,        
// // //           headers: 
// // //           { 
// // //             'Authorization': auth,
// // //             'Content-type': 'application/json'
// // //           },
// // //             json: true
            
// // //           }).then(function(people) {
// // //             // salesPeople.salesID = people.id;
// // //             bob.salesName = people.name;
// // //             bob.salesID = people.id;
// // //             // Salespeople.update(salesPeople);
// // //             // bob.salesName = salesName;
// // //             // bob.salesID = salesID;
// // //             console.log("Name = " + bob.salesName);
// // //                         console.log("ID = " + bob.salesID);

// // //             console.log("bob = " + JSON.stringify(bob));
// // //             // sam.push(bob);
// // //  sam = sam + (JSON.stringify(bob));

// // //             console.log("sam + bob = " + sam);
// // //                     // console.log("Process Create Date: " + createDate);
// // //                                 // console.log("bob type= " + typeof bob);
// // //             // console.log("sam = " + sam);

// // // return sam;
// // //             // console.log("salesPeople = " + JSON.stringify(salesPeople) + "\n");
// // //           })
// // //           .catch(function (err) {
// // //           console.log("A salesID no longer correlates to a person.\n")  
// // //         })
// // //             // console.log("Name = " + bob.salesName);
// // //             //             console.log("ID = " + bob.salesID);
// // //   // if (bob.salesID === deal.salesperson) {
// // //   // bob.salesName == deal.salesName;

// // //             // console.log("bob = " + JSON.stringify(bob));

// // //             // console.log(salesPeople.salesID);
// // //                     // console.log("Process Create Date: " + createDate);

// // //             // console.log("salesPeople = " + JSON.stringify(salesPeople) + "\n");
         
// // //   getData().then(function(totalRecords) {

// // //     request(theList, function (err, res, category) {
// // //       // var salesPeople = {};
// // //       // var uniqueSalesperson = {};
// // //       // var newSalesperson = [];
// // //       // var bob = {};

// // //       for (var i=0;i<totalRecords.length;i++){
// // //         // if ((body.objects[i].fieldValues[0][0].raw == 12 || body.objects[i].fieldValues[0][0].raw == 8) && body.objects[i].fieldValues.process_close_date[0].raw >= 1451635200000) {

// // //         theSalesperson = totalRecords[i].fieldValues[1][0].raw;
// // //       //   newSalesperson.push(totalRecords[i].fieldValues[1][0].raw);
// // //       //   // }
// // //       // }
// // //       // var uniqueSalesperson = newSalesperson.filter(function(elem, pos) {
// // //       // return newSalesperson.indexOf(elem) == pos;
// // //       // });
// // //       // console.log("--Salespeople length = " + uniqueSalesperson.length);
// // //           // console.log("--Salespeople array = " + uniqueSalesperson);

// // //       // var peopleArray = [];

// // //       // for (var i=0;i<uniqueSalesperson.length;i++){

// // //         var eachID = theSalesperson;
// // //         rp.get({
// // //           uri: 'https://api.salesforceiq.com/v2/users/' + eachID,        
// // //           headers: 
// // //           { 
// // //             'Authorization': auth,
// // //             'Content-type': 'application/json'
// // //           },
// // //             transform: function(body, res){
// // //               allIDs = JSON.parse(body);
// // //               return allIDs;
// // //             }
// // //           }).then(function(allIDs) {
// // //             salesPeople.salesID = allIDs.id;
// // //             salesPeople.salesName = allIDs.name;
// // //             // Salespeople.create(salesPeople);

// // //             // console.log(salesPeople.salesName);
// // //             // console.log(salesPeople.salesID);
// // //             console.log("salesPeople = " + JSON.stringify(salesPeople) + "\n");
// // //           })
// // //           .catch(function (err) {
// // //           console.log("A salesID no longer correlates to a person.\n")  
// // //         })
// // //       }
// //     });
// //   });
// // // // // }
// // // // // getNames();
// // // module.exports = sam;
