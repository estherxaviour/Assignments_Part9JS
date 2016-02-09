/* Assignment1
Need to create NodeJS app and read the file from local system let say “sample.txt” in
asynchronous style and print the content of file in console as well as browser.
*/


var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    fs.readFile("sample.txt", "utf8", function (error, data) {
        res.end(data);
        console.log(data);
    });
});
server.listen(3000);
console.log('server running on port number 3000')



