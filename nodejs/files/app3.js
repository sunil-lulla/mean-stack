var fs = require('fs');

// async version
fs.readFile('readtest.txt','utf8',function(err, data) {
	fs.writeFile('asyncOutputFile.txt',data);
})
