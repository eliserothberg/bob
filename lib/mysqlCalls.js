var connection=require('../connection/connection.js');
// var salesData = require("./salesData.js");


function logResults(result, res){
	var monthlytotal=[0.,0.,0.,0.,0.,0.,0.,0.,0.,0.,0.,0.];
	var months=Object.keys(result[0]);
	months.shift();
	months.shift();
	var passEmp=[];
	// console.log(months);
	// console.log('logResults');
	// console.log(result);
	for (var i=0;i<result.length;i++){
		console.log('---------------------------------------------');
		console.log("Salesperson: "+result[i].salesName);
		var total=0;
		var individual={};
		individual.salesperson=result[i].salesName;
		for (var j=0;j<months.length;j++){
			individual[months[j]]=result[i][months[j]].toFixed(2);
			console.log("$"+individual[months[j]]);
			total+=result[i][months[j]];
			monthlytotal[j]+=result[i][months[j]];
		}
		passEmp.push(individual);
		console.log('Yearly total: $'+total);
		console.log('---------------------------------------------');
	}
	console.log("Monthly Totals:")
	var passMonth=[];
	for (var i=0;i<months.length;i++){
		console.log(months[i]+": $"+monthlytotal[i].toFixed(2));
		var intermediate={};
		intermediate.month=months[i];
		intermediate.total=monthlytotal[i].toFixed(2);
		passMonth.push(intermediate);
	}
	console.log('about to render');
	res.render('./graphs/index', {
		months:passMonth,
		employees:passEmp
	});
}

function grabData(tableInput, cb, res) {
	// queryString holds query for mysql:
	connection.query(tableInput, function (err, result) {
		// if error throw it
		if (err) throw err;
		// if no error call the callback function with the query results
		return cb(result, res);
	});
}
function salesByMonth(newVersusReturning, startDate, endDate, res){
var queryString = 'SELECT Deals.salesperson, Salespeople.salesName, ' +
 'sum(if(month = 1, revenue, 0))  AS Jan, '+
 'sum(if(month = 2, revenue, 0))  AS Feb, '+
 'sum(if(month = 3, revenue, 0))  AS Mar, '+
 'sum(if(month = 4, revenue, 0))  AS Apr, '+
 'sum(if(month = 5, revenue, 0))  AS May, '+
 'sum(if(month = 6, revenue, 0))  AS Jun, '+
 'sum(if(month = 7, revenue, 0))  AS Jul, '+
 'sum(if(month = 8, revenue, 0))  AS Aug, '+
 'sum(if(month = 9, revenue, 0))  AS Sep, '+
 'sum(if(month = 10, revenue, 0)) AS Oct, '+
 'sum(if(month = 11, revenue, 0)) AS Nov, '+
 'sum(if(month = 12, revenue, 0)) AS "Dec" '+
'FROM Deals '+
'INNER JOIN Salespeople '+
'ON Deals.salesperson=Salespeople.salesID '+
'WHERE (dealStatus = "Deal Won (100%)" OR dealStatus = "Very Likely (90%)") ';
 queryString+='AND (newVersusReturning = ';
 for (var i=0;i<newVersusReturning.length;i++){
 	queryString+='"'+newVersusReturning[i]+'"';
 	if (i<(newVersusReturning.length-1)){
 		queryString+=' OR newVersusReturning = ';
 	}
 }
queryString+=') AND closeDate BETWEEN "'+startDate+'" AND "'+endDate+'" GROUP BY salesperson;';
console.log(queryString);
return grabData(queryString, logResults, res);
connection.end();
}

module.exports=salesByMonth;