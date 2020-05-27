function checkQ1() {

	if (document.question1.question.value == "Wakefulness") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br> This EEG shows a posterior dominant rhythm on the posterior channels.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "The posterior dominant rhythm is emphasized within the red squares. <br><br> Great job!";

}

	if (document.question1.question.value == "NREM1") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not quite! <br><br> The most characteristic features of drowsiness are vertex waves.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "img/vertexwaves1.png";
		document.getElementById("afterQ1_picture").innerHTML = "The EEG tracing above shows vertex waves as marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question1.question.value == "NREM2") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No, sorry! <br><br> The most characteristic features of stage II sleep are vertex waves and sleep spindles.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "img/vertexwaves1.png";
		document.getElementById("afterQ1_picture").innerHTML = "The EEG tracing above shows vertex waves and sleep spindles as marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question1.question.value == "NREM3") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No, this answer is not right! <br><br> The most characteristic features of stage III sleep are high-amplitude slow waves occupying more than 30% of the EEG tracing.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "img/vertexwaves1.png";
		document.getElementById("afterQ1_picture").innerHTML = "The EEG tracing above shows high-amplitude slow waves as marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question1.question.value == "") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "You have not selected any answer. <br><br>Select one of the answers.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> Try again!";
}


}








function checkQ2() {

	if (document.getElementById("q2DSW").checked == true && document.getElementById("q2PDR").checked == false && document.getElementById("q2S").checked == false && document.getElementById("q2EB").checked == false && document.getElementById("q2VW").checked == false && document.getElementById("q2MA").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Exactly! <br><br> The most characteristic features of stage III sleep are high-voltage diffuse slow waves.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "The diffuse slow waves are emphasized with the red arrows. The red rectangle emphasizes a channel with features that may be confused with muscle artifact. However, that finding represents (most likely) an electrode artifact, not muscle artifact. This EEG tracing is typical of stage III sleep. <br><br> Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> Try again!";

}


}









function checkQ3() {

	if (document.question3.question.value == "Wakefulness") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No. Sorry, this answer is not correct! <br><br> The most characteristic features of wakefulness are eyeblinks, a posterior dominant rhythm, and muscle artifact.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "The posterior dominant rhythm is emphasized with the red arrows. Also look at the eyeblinks and the muscle artifact. <br><br> Try again!";

}

	if (document.question3.question.value == "NREM1") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> The most characteristic features of drowsiness are vertex waves.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "The EEG tracing in the question shows a vertex wave as marked by the red arrow. It can be argued that there is also a poorly defined posterior dominant rhythm as marked by the red rectangle. Another characteristic of drowsiness is dissappearing or absent posterior dominant rhythm and appearance of vertex waves. <br><br> Great job!";

}

	if (document.question3.question.value == "NREM2") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No, sorry! <br><br> The most characteristic features of stage II sleep are vertex waves and sleep spindles.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "img/spindles1.png";
		document.getElementById("afterQ3_picture").innerHTML = "The EEG tracing above shows sleep spindles as marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question3.question.value == "NREM3") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No, this answer is not right! <br><br> The most characteristic features of stage III sleep are high-amplitude slow waves occupying more than 30% of the EEG tracing.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "img/slowwaves1.png";
		document.getElementById("afterQ3_picture").innerHTML = "The EEG tracing above shows high-amplitude slow waves as marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question3.question.value == "") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "You have not selected any answer. <br><br>Select one of the answers.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Try again!";
}


}








function checkQ4() {

	if (document.getElementById("q4PDR").checked == false && document.getElementById("q4SNOVW").checked == false && document.getElementById("q4S").checked == true && document.getElementById("q4MA").checked == false && document.getElementById("q4VW").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> The most characteristic features of stage II sleep are sleep spindles.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "The sleep spindles are emphasized within the squares. The arrows point towards vertex waves, which are also seen in stage II sleep. This EEG tracing is typical of stage II sleep. <br><br> Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "";
		document.getElementById("afterQ4_picture").innerHTML = "<br><br> Try again!";

}


}








function checkQ5() {

	if (document.question5.question.value == "Wakefulness") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No. Sorry, this answer is not correct! <br><br> The most characteristic features of wakefulness are eyeblinks, a posterior dominant rhythm, and muscle artifact.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "img/wake1.png";
		document.getElementById("afterQ5_picture").innerHTML = "This figure shows the most characteristic features of wakefulness: a posterior dominant rhythm, eyeblinks, and muscle artifact. Do you see any of those in the EEG in the question? <br><br> Try again!";

}

	if (document.question5.question.value == "NREM1") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correct! <br><br> The most characteristic features of drowsiness are vertex waves.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "The EEG tracing in the question shows a vertex wave as marked by the red arrow. The rectangles also show another typical feature of drowsiness: the eyes move to one side and the other slowly and cause the frontal channels to widen (when the cornea gets closer to the electrode on that side) and narrow (when the retina gets closer to the electrode on that side) slowly. <br><br> Great job!";

}

	if (document.question5.question.value == "NREM2") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No, sorry! <br><br> The most characteristic features of stage II sleep are vertex waves and sleep spindles.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "img/spindles1.png";
		document.getElementById("afterQ5_picture").innerHTML = "The EEG tracing above shows sleep spindles as marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question5.question.value == "NREM3") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No, this answer is not right! <br><br> The most characteristic features of stage III sleep are high-amplitude slow waves.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "img/vertexwaves1.png";
		document.getElementById("afterQ5_picture").innerHTML = "The EEG tracing above shows diffuse high-amplitude slow waves, two of them marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question5.question.value == "") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "You have not selected any answer. <br><br>Select one of the answers.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "<br><br> Try again!";
}


}








function checkQ6() {

	if (document.question6.question.value == "Wakefulness") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No. Sorry, this answer is not correct! <br><br> The most characteristic features of wakefulness are eyeblinks, a posterior dominant rhythm, and muscle artifact.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "img/wake1.png";
		document.getElementById("afterQ6_picture").innerHTML = "This figure shows the most characteristic features of wakefulness: a posterior dominant rhythm, eyeblinks, and muscle artifact. Do you see any of those in the EEG in the question? <br><br> Try again!";

}

	if (document.question6.question.value == "NREM1") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not right! <br><br> The most characteristic features of drowsiness are vertex waves.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "img/drowsiness1.png";
		document.getElementById("afterQ6_picture").innerHTML = "In drowsiness, vertex waves are present and spindles are not. <br><br> Try again!";

}

	if (document.question6.question.value == "NREM2") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No, sorry! <br><br> The most characteristic features of stage II sleep are vertex waves and sleep spindles.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "img/spindles1.png";
		document.getElementById("afterQ6_picture").innerHTML = "The EEG tracing above shows sleep spindles as marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question6.question.value == "NREM3") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Just right! <br><br> The most characteristic features of stage III sleep are high-amplitude slow waves.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "The EEG tracing above shows diffuse high-amplitude slow waves, two of them marked by the red arrows. <br><br> Great job!";

}

	if (document.question6.question.value == "") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "You have not selected any answer. <br><br>Select one of the answers.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "<br><br> Try again!";
}


}








function checkQ7() {

	if (document.getElementById("q7PDR").checked == true && document.getElementById("q7SNOVW").checked == false && document.getElementById("q7S").checked == false && document.getElementById("q7NREMIII").checked == false && document.getElementById("q7EB").checked == true && document.getElementById("q7W").checked == true && document.getElementById("q7VW").checked == false) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct! <br><br> Eyeblinks and a posterior dominant rhythm are among the most typical features of wakefulness.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "The eyeblinks are emphasized with the red arrows and the posterior dominant rhythm is emphasized within the squares. This EEG tracing is typical of wakefulness. There may be some muscle artifact, but it is not prominent. <br><br> Great job!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br> Try again!";

}


}








function checkQ8() {

	if (document.question8.question.value == "Wakefulness") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Just right! <br><br> The most characteristic features of wakefulness are eyeblinks, a posterior dominant rhythm, and muscle artifact.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "This figure shows the most characteristic features of wakefulness: a posterior dominant rhythm, eyeblinks, and muscle artifact. However, it is important to notice that, as in this figure, these features can appear asymmetrically. This asymmetry is normal as long as it is not persistent <br><br> Great job!";

}

	if (document.question8.question.value == "NREM1") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not right! <br><br> The most characteristic features of drowsiness are vertex waves.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "img/drowsiness1.png";
		document.getElementById("afterQ8_picture").innerHTML = "In drowsiness, vertex waves are present and spindles are not. <br><br> Try again!";

}

	if (document.question8.question.value == "NREM2") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "No, sorry! <br><br> The most characteristic features of stage II sleep are vertex waves and sleep spindles.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "img/spindles1.png";
		document.getElementById("afterQ8_picture").innerHTML = "The EEG tracing above shows sleep spindles as marked by the red arrows. Do you see those features in the EEG tracing in the question? <br><br> Try again!";

}

	if (document.question8.question.value == "NREM3") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Incorrect! <br><br> The most characteristic features of stage III sleep are high-amplitude slow waves.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "img/slowwaves1.png";
		document.getElementById("afterQ8_picture").innerHTML = "The EEG tracing above shows diffuse high-amplitude slow waves, two of them marked by the red arrows. Do you see those in the EEG in the question?<br><br> Try again!";

}

	if (document.question8.question.value == "") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "You have not selected any answer. <br><br>Select one of the answers.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("afterQ8_picture").innerHTML = "<br><br> Try again!";
}


}








function checkQ9() {

	if (document.question9.question.value == "Wakefulness") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No, not right! <br><br> The most characteristic features of wakefulness are eyeblinks, a posterior dominant rhythm, and muscle artifact.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "img/wake1.png";
		document.getElementById("afterQ9_picture").innerHTML = "This figure shows the most characteristic features of wakefulness: a posterior dominant rhythm, eyeblinks, and muscle artifact. Do you see those in the EEG in the question? <br><br> Try again!";

}

	if (document.question9.question.value == "NREM1") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Not right! <br><br> The most characteristic features of drowsiness are vertex waves.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "img/drowsiness1.png";
		document.getElementById("afterQ9_picture").innerHTML = "In drowsiness, vertex waves are present and spindles are not. <br><br> Try again!";

}

	if (document.question9.question.value == "NREM2") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correct! <br><br> The most characteristic features of stage II sleep are vertex waves and sleep spindles.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "img/spindles1.png";
		document.getElementById("afterQ9_picture").innerHTML = "The EEG tracing above shows sleep spindles as marked by the red arrows. There are also vertex waves. <br><br> Great job!";

}

	if (document.question9.question.value == "NREM3") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Incorrect! <br><br> The most characteristic features of stage III sleep are high-amplitude slow waves.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "img/slowwaves1.png";
		document.getElementById("afterQ9_picture").innerHTML = "The EEG tracing above shows diffuse high-amplitude slow waves, two of them marked by the red arrows. Do you see those in the EEG in the question?<br><br> Try again!";

}

	if (document.question9.question.value == "") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "You have not selected any answer. <br><br>Select one of the answers.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("afterQ9_picture").innerHTML = "<br><br> Try again!";
}


}