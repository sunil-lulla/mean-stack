fs = require('fs');
var myReadStream = fs.createReadStream(__dirname+'/readme.txt',{encoding: 'utf8'});
var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt',{encoding: 'utf8'});
// myReadStream.on('error', function (error) {console.log("Caught", error);});

myReadStream.on('data',function (chunk) {
	// console.log('another chunk');
	// console.log(chunk);
	myWriteStream.write(chunk+'new chunk');
})