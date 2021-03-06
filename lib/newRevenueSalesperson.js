// var mysql = require('mysql');

// connect with the mysql database
var connection = require('../connection/connection.js')

// connection.connect(function (err) {
// 	if (err) {
// 		console.error('error connecting: ' + err.stack);
// 		return;
// 	}
// 	console.log('connected as id ' + connection.threadId);
// });


function logResults(result){
	var monthlytotal=[0.,0.,0.,0.,0.,0.,0.,0.,0.,0.,0.,0.];
	var months=Object.keys(result[0]);
	months.shift();
	months.shift();
	// console.log(months);
	// console.log('logResults');
	// console.log(result);
	for (var i=0;i<result.length;i++){
		console.log('---------------------------------------------');
		console.log("Salesperson: "+result[i].salesName);
		var total=0;
		for (var j=0;j<months.length;j++){
			console.log(months[j]+": $"+result[i][months[j]].toFixed(2));
			total+=result[i][months[j]];
			monthlytotal[j]+=result[i][months[j]];
		}
		console.log('Yearly total: $'+total);
		console.log('---------------------------------------------');
	}
	console.log("Monthly Totals:")
	for (var i=0;i<months.length;i++){
		console.log(months[i]+": $"+monthlytotal[i].toFixed(2));
	}
}

function grabData(tableInput, cb) {
	// queryString holds query for mysql:
	connection.query(tableInput, function (err, result) {
		// if error throw it
		if (err) throw err;
		// if no error call the callback function with the query results
		cb(result);
	});
}
function salesByMonth(newVersusReturning, startDate, endDate){
var queryString = 'SELECT Deals.salesperson, Salespeople.salesName, ' +
 'sum(if(month = "January", revenue, 0))  AS Jan, '+
 'sum(if(month = "February", revenue, 0))  AS Feb, '+
 'sum(if(month = "March", revenue, 0))  AS Mar, '+
 'sum(if(month = "April", revenue, 0))  AS Apr, '+
 'sum(if(month = "May", revenue, 0))  AS May, '+
 'sum(if(month = "June", revenue, 0))  AS Jun, '+
 'sum(if(month = "July", revenue, 0))  AS Jul, '+
 'sum(if(month = "August", revenue, 0))  AS Aug, '+
 'sum(if(month = "September", revenue, 0))  AS Sep, '+
 'sum(if(month = "October", revenue, 0)) AS Oct, '+
 'sum(if(month = "November", revenue, 0)) AS Nov, '+
 'sum(if(month = "December", revenue, 0)) AS "Dec" '+
'FROM Deals '+
'INNER JOIN Salespeople '+
'ON Deals.salesperson=Salespeople.salesID '+
'WHERE (dealStatus = "Deal Won (100%)" OR dealStatus = "Very Likely (90%)") ';
 queryString+='AND (newVersusReturning = ';
 for (var i=0;i<conditions2.length;i++){
 	queryString+='"'+conditions2[i]+'"';
 	if (i<(conditions2.length-1)){
 		queryString+=" OR "+column2+' = ';
 	}
 }
queryString+=') AND closeDate BETWEEN "'+startDate+'" AND "'+endDate+'" GROUP BY salesperson;';
console.log(queryString);
grabData(queryString,logResults);
}
var attributes = ["salesperson","closeDate"];
var column1 = "dealStatus";
var conditions1 = ["Deal Won (100%)","Very Likely (90%)"];
var column2 = "newVersusReturning";
var conditions2 = ["New Business", "Upsell/New Sale to Existing Project"];
var table="Deals";
var startDate="2016-01-01";
var endDate="2016-12-05";
salesByMonth(conditions2,startDate,endDate);
