var http = require('http');
fs = require('fs');
	
	// response.writeHead(200, {'Content-Type':"text/plain"});
	// myReadStream.pipe(response);


var server = http.createServer(function (request,response) {
	var myReadStream = fs.createReadStream(__dirname+'/index.html',{encoding: 'utf8'});
	myReadStream.pipe(response);
	// response.writeHead(200, {'Content-Type':"text/html"});
	// response.end('Welcome to NodeJS server');
});

server.listen(3000, '127.0.0.1');
console.log('hey dawgs, listing to port 3000');
