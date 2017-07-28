var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended:false});

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
		resp.render('todo',{todos:tododata});
	});

	app.post('/todo', urlencoded ,function(req,resp) {
		tododata.push(req.body);
		resp.json(tododata);
	});

	app.delete('/todo/:item',function(req,resp) {
		tododata = tododata.filter(function(todo) {
			return todo.item.replace(/ /g,"-") !== req.params.item;
		});
		resp.json(tododata);
	});
	}