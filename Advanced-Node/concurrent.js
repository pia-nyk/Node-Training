var logUpdate = require("log-update");
var toX = () => 'X';
var delay = (seconds) => new Promise((resolves) => {
	setTimeout(resolves, seconds*1000)
});

var tasks = [
	delay(4),
	delay(6),
	delay(4),
	delay(3),
	delay(5),
	delay(4),
	delay(9)
];

class PromiseQueue {
	constructor(promises=[], concurrentTasks = 1) {
		this.todo = promises;
		this.concurrentTasks = concurrentTasks;
		this.completed = [];
		this.running = [];
		this.total = promises.length;
	}

	get runAnother() {
		return this.running.length < this.concurrentTasks && this.todo.length > 0;
	}

	graphTasks() {
		var {todo, running, completed} = this;
		logUpdate(`
			todo: [${todo.map(toX)}]
			running: [${running.map(toX)}]
			completed: [${completed.map(toX)}]
		`)
	}

	run() {
		while(this.runAnother) {
			var promise = this.todo.shift();
			promise.then(() => {
				this.completed.push(this.running.shift());
				this.run();
				this.graphTasks();
			})
			this.running.push(promise);
			this.graphTasks();
		}
	}
}

var delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();