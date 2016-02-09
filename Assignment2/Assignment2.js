/* Assignment2
You need to create NodeJS app and write the file to local system in asynchronous style and
print the content of file in console as well as browser.
*/
var http = require('http');
var fs = require("fs");
console.log("Going to write into existing file");
fs.writeFile('sample.txt', 'There’s only one corner of the universe you can be certain of improving, and that’s your own self !',  function(err) {
   if (err) {
       return console.error(err);
   }
});
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
  var server = http.createServer(function (req, res) {
    fs.readFile("sample.txt", "utf8", function (error, data) {
        res.end(data);
        console.log(data);
    });
 });
server.listen(3000);
console.log('server running on port number 3000');
 
   
   
   
   
   
  