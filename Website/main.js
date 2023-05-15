// JavaScript Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btked() {
  // Input
  let answer1 = document.getElementById("q1").value.toLowerCase();
  let answer2 = document.getElementById("q2").value.toLowerCase();
  let answer3 = document.getElementById("q3").value.toLowerCase();
  let answer4 = document.getElementById("q4").value.toLowerCase();
  let answer5 = document.getElementById("q5").value.toLowerCase();

  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;
  let result5 = 0;

  // Quiz Answers
  if (answer1 == "nhl") {
    document.getElementById("q1").style.backgroundColor = "green";
    document.getElementById("out1").innerHTML = `Correct!`;
    result1 = 1;
  } else {
    document.getElementById("q1").style.backgroundColor = "red";
    document.getElementById(
      "out1"
    ).innerHTML = `Incorrect! The correct answer is nhl.`;
    result1 = 0;
  }

  if (answer2 == "5") {
    document.getElementById("q2").style.backgroundColor = "green";
    document.getElementById("out2").innerHTML = `Correct!`;
    result2 = 1;
  } else {
    document.getElementById("q2").style.backgroundColor = "red";
    document.getElementById(
      "out2"
    ).innerHTML = `Incorrect! The correct answer is 5!`;
    result2 = 0;
  }

  if (answer3 == "3") {
    document.getElementById("q3").style.backgroundColor = "green";
    document.getElementById("out3").innerHTML = `Correct!`;
    result3 = 1;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
    document.getElementById(
      "out3"
    ).innerHTML = `Incorrect! The correct answer is 3 players`;
    result3 = 0;
  }

  if (answer4 == "2" || answer4 == "two" || answer4 == "II") {
    document.getElementById("q4").style.backgroundColor = "green";
    document.getElementById("out4").innerHTML = `Correct!`;
    result4 = 1;
  } else {
    document.getElementById("q4").style.backgroundColor = "red";
    document.getElementById(
      "out4"
    ).innerHTML = `Incorrect! The correct answer is 2(two,II) players`;
    result4 = 0;
  }

  if (
    answer5 == "Gretsky" ||
    answer5 == "wayne gretsky" ||
    answer5 == "Wayne"
  ) {
    document.getElementById("q5").style.backgroundColor = "green";
    document.getElementById("out5").innerHTML = `Correct!`;
    result5 = 1;
  } else {
    document.getElementById("q5").style.backgroundColor = "red";
    document.getElementById(
      "out5"
    ).innerHTML = `Incorrect! The correct answer is Wayne gretsky `;
    result5 = 0;
  }

  let score = ((result1 + result2 + result3 + result4 + result5) / 5) * 100;
  let sum = result1 + result2 + result3 + result4 + result5;

  if (sum == 0 || sum == 1) {
    document.getElementById("output").innerHTML = `Awesome job`;
  } else if (sum == 2 || sum == 3) {
    document.getElementById("output").innerHTML = `Keep trying!`;
  } else if (sum == 4) {
    document.getElementById("output").innerHTML = `So close!`;
  } else {
    document.getElementById("output").innerHTML = `Great work!`;
  }

  document.getElementById("scores").innerHTML =
    `You got ` + sum + `/5! (` + score + `%)`;
}
