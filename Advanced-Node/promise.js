/**
	promises can invoke resolves method when everything goes right
	or rejects func if something goes wrong
*/

/*
var delay = (seconds) => new Promise((resolves, rejects) => {
	setTimeout(resolves, seconds*1000);
});

delay(1)
	.then(() => {
		console.log("the delay has ended");
	});


var delay = (seconds) => new Promise((resolves, rejects) => {
	setTimeout(resolves("the delay has ended"), seconds*1000);
});

delay(1)
	.then((message) => console.log(message));

delay(2)
	.then(console.log)
	.then(() => 42)
	.then((number) => console.log(`Number returned ${number}`));

console.log("printing before delay");
*/

var delay = (seconds) => new Promise((resolves, rejects) => {
	if(seconds > 3) {
		rejects(new Error(`${seconds} is too long a wait!`))
	}
	setTimeout(resolves("successfully waiting"), seconds*1000);
});

delay(4)
	.then(console.log)
	.catch((error) => console.log(`Error occured: ${error.message}`));