/**
const path = require("path");
const [,,firstName, lastName] = process.argv

console.log(__dirname);
console.log(__filename);
console.log(`The file names is ${path.basename(__filename)}`);

console.log(`Welcome ${firstName} ${lastName}`)


const grab = flag => {
	let index = process.argv.indexOf(flag);
	return process.argv[index+1];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} to you ${user}`);
*/

const { basename } = require("path");
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(basename(__filename));
log(getHeapStatistics());