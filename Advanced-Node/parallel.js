var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var readdir = promisify(fs.readdir);
var unlink = promisify(fs.unlink);
var delay = (seconds) => new Promise((resolves) => {
	setTimeout(resolves, seconds*1000);
});

/**
Promise.all([
	writeFile('readme.md', 'Hello World'),
	writeFile('readme.txt', 'Hello World'),
	writeFile('readme.json', '{ "hello":"world" }')
]).then(() => readdir(__dirname))
.then(console.log);

//single promise that resolves all promises at once
Promise.all([
	unlink('readme.md'),
	unlink('readme.txt'),
	unlink('readme.json')
]).then(() => readdir(__dirname))
.then(console.log);
*/

Promise.race([
	delay(5),
	delay(3),
	delay(5)
]).then(() => readdir(__dirname))
.then(console.log);