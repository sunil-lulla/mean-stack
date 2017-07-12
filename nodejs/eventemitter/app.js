var event = require('events');

myEvent = new event.EventEmitter();
myEvent.on('someevent',function(msg){
	console.log(msg);
});

myEvent.emit('someevent',"An event has been emitted");