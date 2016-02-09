/*Assignment4
 Create a node.js application to read student.json file
from local system in CPS coding style(Asynchronous programming) and
print in console and then modify/change data of student.json file and
then again save updated data in student.json file, then read once again
student.json file and print in console and browser to verify student.json
file is updated or not.*/

var http = require('http');
var jsonfile = require('jsonfile');
var util = require('util');
var file = 'student.json';

//Reading data from student.json
  jsonfile.readFile(file, function(err, obj) {
   console.log("The original data");
   console.log(obj);
    if(err){
	console.error(err);  
  }
  else{
	 var obj = {
	"name": "Esther",
	"Id": 1123,
	"Course": "B.C.A",
	"College": "Milagres"
};
    jsonfile.writeFile(file, obj, function (err) {
   console.log("Data written successfully!");

    });
 
  }
});

var server = http.createServer(function (req, res) {
jsonfile.readFile(file, function(err, obj) {
  console.log("Let's read newly written data");
  console.dir(obj);
  res.write(JSON.stringify(obj,0,4));
    res.end();
   });

});
server.listen(8000);
console.log('server running on port number 8000');
 
