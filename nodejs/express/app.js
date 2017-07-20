var express = require('express');

app = express();

app.get("/",function(req,resp) {
	resp.send('This is the homepage');
});

app.get("/contact",function(req,resp) {
	resp.send('This is the contact page');
});

app.listen(3000);