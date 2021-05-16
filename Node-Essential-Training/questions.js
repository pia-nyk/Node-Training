const questions = [
	"What is your name?",
	"What would you rather be doing?",
	"What is your preferred programming language?"
];

const ask = (i=0) => {
	process.stdout.write(`\n\n${questions[i]}`);
	process.stdout.write(` > `);
}

ask();

const answers = [];
//wait for answer & print the answer
process.stdin.on("data", data => {
	answers.push(data.toString().trim());
	if(answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});

process.on("exit", () => {
	const [name, activity, lang] = answers;
	console.log(`
	Thank you for the answers.
	Go ${name} do ${activity}, you can code in ${lang} later.
	`);
});