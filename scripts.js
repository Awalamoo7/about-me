"use strict";

let user = prompt("What's your name?");

while (!user) {
	user = prompt("pls tell me");
}

document.getElementById("greeting").innerHTML = "Hello " + user + "!";

function quiz() {
	let scoreCount = 0;
	let questionArray = [
		"Am I Nigerian?",
		"Do I currently work as a Product manager??",
		"Was I born in the UK?",
		"Did I initially come to the UK to study?",
	];
	let answerArray = [["y", "n", "n", "y"]];
	for (let i = 0; i < questionArray.length; i++) {
		let answer = prompt(questionArray[i]);
		if (answer.charAt(0).toLowerCase() == answerArray[0][i]) {
			alert("correct!");
			console.log("Q1 correct");
			scoreCount += 1;
		} else {
			alert("Wrong!");
			console.log("Q1 wrong");
		}
	}

	let randomNumber = Math.floor(Math.random() * 11);
	console.log("randomNumber = " + randomNumber);
	let Q6AllowedAttempts = 4;
	let answer6 = prompt(
		"I have a gift for you, and I will only give you if you can predict the right number between 1 to 10. Lets go!"
	);
	for (let j = Q6AllowedAttempts - 1; j >= 0; j--) {
		if (answer6 == randomNumber) {
			alert(
				"Well done! Got it in " +
					(Q6AllowedAttempts - j) +
					" attempt(s)! (did you cheat by looking at the console?)"
			);
			scoreCount += 1;
			break;
		} else if (j == 0) {
			alert("you are bad at guessing");
			break;
		} else if (answer6 < randomNumber) {
			answer6 = prompt("Too low! Guess again. " + j + " attempts remaining.");
		} else {
			answer6 = prompt("Too high! Guess again. " + j + " attempts remaining.");
		}
	}
	alert(
		"Thanks for playing, " + user + "! Your Score was " + scoreCount + "/7"
	);
}
