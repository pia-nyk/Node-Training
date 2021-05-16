
var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
	setTimeout(resolves, seconds*1000);
});
var readdir = promisify(fs.readdir);

const doStuffAsync = async () => {
	console.log('Starting');
	await delay(1);
	console.log('Creating a file');
	await writeFile('sample.txt', 'This is a sample file');
	beep();
	console.log('Created file');
	await delay(2);
	await unlink('sample.txt');
	beep();
	console.log('Deleted file');
}

// doStuffAsync();
start();
async function start() {
	var files = await readdir(__dirname);s
	console.log(files);
}

