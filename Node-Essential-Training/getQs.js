
const collectAnswers = require("./collectAnswers");

const questions = [
	"Whats your name?",
	"Where do you live?",
	"Where are you going with Node js?"
];

collectAnswers(questions, answers => {
	console.log(`Thank you for answering the questions`);
	console.log(answers);
	process.exit();
});
