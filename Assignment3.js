/* Assignment3
Create a node.js application which will show the use of node event module and perform the
various operation like event handler creation , bind connection and bind the received data etc.
For this you need to create node js app which will use the node event module and eventEmiiter
object and print the output in console and browser
*/

var http = require('http');
// Import events module
var events = require('events');
// Create an eventEmitter object
var server = http.createServer(function (req, res) {
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
	res.write('connection succesful.\n');
   console.log('connection succesful.');

   // Fire the data_received event
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
	res.write('data received succesfully.\n');
   console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');
res.end("Program Ended.");
console.log("Program Ended.");
});
server.listen(3000);
console.log('server running on port number 3000')


