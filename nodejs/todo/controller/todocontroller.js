var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencoded = bodyParser.urlencoded({extended:false});

username = ""
password = ""

connectionString = "mongodb://"+username+":"+password+"@ds127163.mlab.com:27163/tododb"

// connect to db

mongoose.connect(connectionString);

// the schema for mongoDB
var todoSchema = new mongoose.Schema({
	item:String
})

var Todo = mongoose.model('Todo',todoSchema);
// var itemOne = Todo({item:'Buy Flowers'}).save(function(err){
// 	if(err){
// 		throw err;
// 	}
// 	console.log("Saved");
// });


var tododata = [
	{
		"item":"Prepare Milk Shake"
	},
	{
		"item":"Complete the project"
	},
	{
		"item":"Show it to the clients"
	},
]

module.exports = function (app) {
	app.get('/todo',function(req,resp) {
		Todo.find({},function(err,data) {
			if (err)
				throw err
			resp.render('todo',{todos:data});
		});
	});

	app.post('/todo', urlencoded ,function(req,resp) {
		// tododata.push(req.body);
		var tododata = Todo(req.body).save(function(err){
			if(err)
				throw err
			resp.json(tododata);
		})
		
	});

	app.delete('/todo/:item',function(req,resp) {
		Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data) {
			if (err)
				throw err
			resp.json(tododata);
		});
		// tododata = tododata.filter(function(todo) {
		// 	return todo.item.replace(/ /g,"-") !== req.params.item;
		// });
	});
	}