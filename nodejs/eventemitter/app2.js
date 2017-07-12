var event = require('events');
var util = require('util');

var Person = function (name) {
	this.name = name;
}

util.inherits(Person, event.EventEmitter);

var james  = new Person("james");
var amit  = new Person("amit");
var arya  = new Person("arya");

people = [james, amit, arya];

people.forEach(function(person) {
	person.on('speak',function(msg) {
		console.log(person.name + " said: "+msg);
	})
})

amit.emit('speak',"hey dude");