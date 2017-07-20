var express = require('express');

app = express();

app.get("/",function(req,resp) {
	resp.send('This is the homepage');
});

app.get("/profile/sunil",function(req,resp) {
	resp.send('Developer\'s profile');
});


app.get("/profile/:id",function(req,resp) {
	resp.send('hey there '+req.params.id);
});

app.listen(7100);