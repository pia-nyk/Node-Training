const readline = require("readline");

const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

module.exports = (questions, done = f => f) => {
	const answers = [];
	const [first] = questions;

	const questionsAnswered = answer => {
		answers.push(answer);
		if(answers.length < questions.length) {
			rl.question(questions[answers.length], questionsAnswered);
		} else {
			done(answers);
		}
	};
	rl.question(first, questionsAnswered);
};

