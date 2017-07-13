var http = require('http');
var server = http.createServer(function (request,response) {
	console.log('request was made on '+request.url);
	response.writeHead(200, {'Content-Type':"text/plain"});
	response.end('Welcome to NodeJS server');
});

server.listen(3000, '127.0.0.1');
console.log('hey dawgs, listing to port 3000');
