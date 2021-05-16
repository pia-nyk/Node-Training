
//continuation passing style - when code is sync
function hideString(str, done) {
	//to make code async - will run in the next loop
	process.nextTick(() => {
		done(str.replace(/[a-zA-Z]/g, 'X'));
	});
}

hideString("Hello World", (hidden) => {
	console.log(hidden);
});

console.log("end");

//can also use delay for same - setTimeout

//sequential execution of callbacks
function delay(seconds, callback) {
	setTimeout(callback, seconds*1000);
}

delay(2, () => {
	console.log("two seconds passed");
	delay(1, () => {
		console.log("three seconds passed");
		delay(3, () => {
			console.log("six seconds passed");
		})
	})
});