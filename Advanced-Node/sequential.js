
var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
	setTimeout(resolves, seconds*1000);
});

//Promise.resolves creates a new promise object & automatically resolves it
const doStuffSeq = () => Promise.resolve()
	.then(() => console.log("starting"))
	.then(() => delay(1))
	.then(() => 'waiting')
	.then(console.log)
	.then(() => delay(2))
	.then(() => writeFile('sample.txt', 'This is a sample file.'))
	.then(beep)
	.then(() => 'File created')
	.then(console.log)
	.then(() => delay(2))
	.then(() => unlink('sample.txt'))
	.then(beep)
	.then(() => 'Deleted file')
	.then(console.log)
	.catch(console.error);

doStuffSeq();
