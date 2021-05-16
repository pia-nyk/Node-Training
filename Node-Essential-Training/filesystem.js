const fs = require("fs");

/**
console.log("Started reading files");
fs.readdirSync("test", (err, files) => {
	if(err) {
		throw err;
	}
	console.log("Printing files: ");
	console.log(files);	
});

fs.readFile("test/readme.md", "UTF-8" , (err, text) => {
	if(err) {
		throw err;
	}
	console.log(text);
});

const md = `
#This is the new file 

We can write text to a file with fs.writeFile 

* fs.readdir
* fs.readFile 
*fs.writeFile


`;
fs.writeFile("test/notes.md", md.trim(), err => {
	if(err) {
		throw err;
	}
	console.log("saved content");
});
*/
if(fs.existsSync("storage-files")) {
	console.log("Directory already exists");
} else {
	fs.mkdir("storage-files", err => {
		if(err) {
			throw err;
		}
		console.log("Directory created");
	})
}