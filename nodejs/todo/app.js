var express = require('express');
var todoController = require('./controller/todocontroller');

var app = express();

//set up template engine

app.set('view engine','ejs');
app.use(express.static('./public'));

//setting up routes
todoController(app);

// listen to port
app.listen(6800);
console.log("listening on 3000 ");