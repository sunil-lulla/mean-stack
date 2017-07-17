fs = require('fs');
var myReadStream = fs.createReadStream(__dirname+'/readme.txt',{encoding: 'utf8'});
var myWriteStream = fs.createWriteStream(__dirname+'/writeme2.txt',{encoding: 'utf8'});
// myReadStream.on('error', function (error) {console.log("Caught", error);});

myReadStream.pipe(myWriteStream);