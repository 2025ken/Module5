function myDogConst(name, show, breed, mySound, canTalk) {
	this.name = name;
	this.show = show;
	this.breed = breed;
	this.mySound = mySound;
	this.canTalk = canTalk;
	
	this.myGreeting = function() {
		return `Hello, I'm ${this.name}. ${this.mySound}. I starred in ${this.show} as a ${this.breed}. Can I talk? ${this.canTalk}.<br>`;
	};
}

let dogFromConstructor = new myDogConst("Bailey", "Clifford the Big Red Dog", "Australian Shepherd", "I am one of Clifford's best friend", true);

document.write(dogFromConstructor.myGreeting());
document.write('<br><br>');

let myDog = {
	name: "Bailey",
	show: "Clifford the Big Red Dog",
	breed: "Australian Shepherd",
	mySound: "I am one of Clifford's best friends",
	
	description() {
		return `Hello, I'm ${this.name}. ${this.mySound}. I starred in ${this.show} as a ${this.breed}.<br>`;
	}
};
document.write(myDog.description());