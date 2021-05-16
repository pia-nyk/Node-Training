/**
	convert a callback function to promise


var { promisify } = require("util");

var delay = (seconds, callback) => {
	if(seconds > 3) {
		callback(new Error(`${seconds} is too long wait`))
	} else {
		//passing first arg as null
		setTimeout(() => 
			callback(null, `${seconds} delay is over`),
			seconds
		);
	}
}

var promiseDelay = promisify(delay);
promiseDelay(5)
	.then(console.log)
	.catch((error) => console.log(`error: ${error.message}`));
*/

//using existing callback as promise
var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);

writeFile("sample.txt", 'This is a sample file')
	.then(() => console.log('File successfully created'))
	.catch((error) => console.log('Error creating file'));