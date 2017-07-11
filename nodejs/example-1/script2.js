setTimeout(function (argument) {
	console.log("3 seconds have passed");
}, 3000);

i = 0;
timer = setInterval(function() {
	i+=2;
	console.log(i+" seconds have passed");
	if(i>5){
		console.log("done");
		clearInterval(timer);
	}
}, 2000);