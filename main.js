function checkQ1() {

var question1 = document.question1.question.value;
var answer1;

	if (question1 == "Wakefulness") {
		answer1 = "Correct. This EEG shows posterior dominant rhythm on the posterior channels.";
}

	if (question1 == "NREM1") {
		answer1 = "Not quite. Drowsiness should have vertex waves.";
}

	if (question1 == "NREM2") {
		answer1 = "Not quite. Stage II sleep should have vertex waves and spindles.";
}

	if (question1 == "NREM3") {
		answer1 = "Not quite. Stage III sleep should have slow waves occupying more than 20% of the tracing.";
}




	document.getElementById("after_submitQ1").style.visibility = "visible";
	document.getElementById("answer").innerHTML = answer1;
}