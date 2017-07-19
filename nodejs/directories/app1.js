var fs = require('fs');
// fs.unlink('deletefiletest.txt',function (err,data) {
// 	// body...
// });

fs.mkdirSync("stuff"); // will create a directory
fs.rmdirSync("stuff"); // will delete a directory

