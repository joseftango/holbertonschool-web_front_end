class studentHogwarts{
	constructor() {
	this.privateScore = 0;
	this.name = null;
	};

	#changeScoreBy(points) {
		this.privateScore = this.privateScore + points;
	}

	setName(newName) {
		this.name = newName;
	}

	rewardStudent() {
		this.#changeScoreBy(1);
	}

	penalizeStudent() {
		this.#changeScoreBy(-1);
	}

	getScore() {
		let str = `${this.name}: ${this.privateScore}`;
		return str;
	}
}

const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());


const draco = new studentHogwarts();
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
