var express = require('express');
var app = express(); 

app.set("view engine","ejs");

app.get('/',function(req,resp) {
	resp.sendFile(__dirname+"/home.html");
});

app.get('/contact',function(req,resp) {
	resp.sendFile(__dirname+"/contact.html");
});

app.get('/profile/:id',function(req,resp) {
	data ={
		"name":"Sunil",
		"age":23,
		"contact":"999-xxx-xxxx"
	}
	resp.render('profile.ejs',{person:data});
});


app.listen(9980);