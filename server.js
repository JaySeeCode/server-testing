//Let's stand upout first Node.js server

var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestOnPORT1 (request, response) {

	response.end("Every day is an opportunity to start over. Keep it up!");

};

function handleRequestOnPORT2 (request, response) {

	response.end("Programming is a craft. Work on your craft daily!");

};

//set up our Node HTTTP package

var server1 = http.createServer(handleRequestOnPORT1);
var server2 = http.createServer(handleRequestOnPORT2);

server1.listen(PORT1, function(){
	console.log("Server listening on " + PORT1);
	// process.exit();
});

server2.listen(PORT2, function() {
	console.log("Server listening on " + PORT2);
})