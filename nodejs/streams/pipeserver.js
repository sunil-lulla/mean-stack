fs = require('fs');
var http = require('http');
var server = http.createServer(function (request,response) {

	var myReadStream = fs.createReadStream(__dirname+'/readme.txt',{encoding: 'utf8'});
	myReadStream.pipe(response);
	response.writeHead(200, {'Content-Type':"text/plain"});
	myReadStream.pipe(response);
	// response.end('Welcome to NodeJS server');
});

server.listen(3000, '127.0.0.1');
console.log('hey dawgs, listing to port 3000');
