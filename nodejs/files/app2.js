var fs = require('fs');

var readfile = fs.readFileSync('readtest.txt','utf8'); // synchronize version
fs.writeFileSync('writeme.txt',readfile);