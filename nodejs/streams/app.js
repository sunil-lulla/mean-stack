fs = require('fs');
var myReadStream = fs.createReadStream(__dirname+'/readme.txt',{encoding: 'utf8'});

// myReadStream.on('error', function (error) {console.log("Caught", error);});

myReadStream.on('data',function (chunk) {
	console.log('another chunk');
	console.log(chunk);
})