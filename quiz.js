function gradeTest() {
  //variables with global implications
  var totalQuestions = 3;
  var correctAnswers = 0;
  var alertText;
  var i;

  var submitAnswer = function () {};
  var a2 = document.getElementsByName("q1");
  var res = document.getElementById("q1r");
  for (i = 0; i < a2.length; i++) {
    if (a2[i].checked) {
      if (a2[i].value == " New York") {
        correctAnswers++;
        res.innerHTML = " Correct Feedback: That's right";
        res.style.color = "green";
        break;
      } else {
        res.innerHTML = " Incorrect Feedback: That’s not it.";
        res.style.color = "red";
      }
    }
  }
  // question 2
  var a4 = document.getElementsByName("q2");
  var res2 = document.getElementById("q2r");
  var a4answers = new Array();
  var a4right = new Array("Processor", "Memory", "Hard Disk", "CD-ROM Drive");
  var a4bool = true;
  for (i = 0; i < a4.length; i++) {
    if (a4[i].checked) {
      a4answers.push(a4[i].value);
    }
  }
  a4answers.sort();
  a4right.sort();
  if (a4answers.length == a4right.length) {
    for (i = 0; i < a4answers.length; i++) {
      if (a4answers[i] != a4right[i]) {
        a4bool = false;
        break;
      }
    }
  } else {
    res2.innerHTML = "Incorrect Feedback: That’s not it.";
    res2.style.color = "red";
    a4bool = false;
  }

  if (a4bool == true) {
    correctAnswers++;
    res2.innerHTML = " Correct Feedback: That's right";
    res2.style.color = "green";
  }

  // question 3
  var a3 = document.getElementsByName("q3");
  var res3 = document.getElementById("q3r");
  for (i = 0; i < a3.length; i++) {
    if (a3[i].checked) {
      if (a3[i].value == "Neo") {
        correctAnswers++;
        res3.innerHTML = " Correct Feedback: That's right";
        res3.style.color = "green";
        break;
      } else {
        res3.innerHTML = " Incorrect Feedback: That’s not it.";
        res3.style.color = "red";
      }
    }
  }
}
