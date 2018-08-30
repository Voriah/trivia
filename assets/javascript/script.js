var slot;
var wins = 0;
var losses = 0;
var answerYear;
var choiceOneYear;
var choiceTwoYear;
var choiceThreeYear;
var choiceFourYear;
var time = 60;
var stopTime;
var highScore = 0;

function countdown() {
  wins = 0;
  losses = 0;
  time = 60;
  $("#right").html(wins);
  $("#rong").html(losses);
  $("#result").html("");
  $("#start").css("display", "none");
  
  stopTime = setInterval(timer, 1000)
}

function timer () { 
  $("#timer").text(time)
  time--;
  if (time < 0) {
    clearInterval(stopTime);
    hideQ();
    $("#result").html(`
    <center><p>You got ${wins} right!</p></center>
    <center><p>Play again?</p></center>
    `)
    $("#start").css("display", "initial");
    if (wins > highScore) {
      highScore = wins;
      $("#high").html(highScore);
    }
  }
  }

function setAnswer() {
  hideQ();
  $("#choice1").text("")
  $("#choice2").text("")
  $("#choice3").text("")
  $("#choice4").text("")
  $("#choice1").attr("data-value", 0)
  $("#choice2").attr("data-value", 0)
  $("#choice3").attr("data-value", 0)
  $("#choice4").attr("data-value", 0)
var range = Math.floor(Math.random() * 85 + 1930)
slot = Math.floor(Math.random() * 4 +1);
setTimeout(function() {
  var queryURL = "https://www.omdbapi.com/?t=the&y=" + range + "&apikey=trilogy";
  $.get(queryURL)
  .then(function(response) {
    $("#hint").html(response.Plot)
    $("#year").html(response.Year)
    $("#correctAnswer").html(response.Title)
    $(`#choice${slot}`).html(response.Title)
    $(`#choice${slot}`).attr("data-value", 1)
    console.log(response);
    answerYear = response.Year;
  }).catch(function (error) {
    console.error(error);
  });
}, 1000)
}

function results() {
  
}

function correct() {
  wins++
  $("#right").html(wins)
  setAnswer();
  setChoices();
  $("#correctAnswer").css("display", "initial")
  $("#yes").css("display", "initial")
  setTimeout(function() {
    $("#correctAnswer").css("display", "none")
    $("#yes").css("display", "none")
  }, 1000)
}

function incorrect () {
  
  losses++
  $("#rong").html(losses);
  setAnswer();
  setChoices();
  $("#correctAnswer").css("display", "initial")
  $("#no").css("display", "initial")
  setTimeout(function() {
    $("#correctAnswer").css("display", "none")
    $("#no").css("display", "none")
  }, 1000)
  
}
function setChoices(){
  setTimeout(function () {
    setChoiceOne(); 
    setChoiceTwo(); 
    setChoiceThree();
    setChoiceFour();
  }, 1000);
  setTimeout(function () {
    if (time <= 0) {
     return; 
    }
    $(".choiceses").css("visibility", "initial")
    $("#stuff").css("visibility", "initial")
  }, 3000);
}

function hideQ() {
  $(".choiceses").css("visibility", "hidden")
}
function showQ() {
  $(".choiceses").css("visibility", "initial")
}

function guessAnswer1() {
  hideQ();
  console.log($("#choice1").text())
  if ($("#choice1").attr("data-value") === "1") {
    correct();
  } else if ($("#choice1").attr("data-value") === "0"){
    incorrect();
  }
}
function guessAnswer2() {
  hideQ();
  console.log($("#choice2").attr("data-value"))
  if ($("#choice2").attr("data-value") === "1") {
    correct();
    
  } else if ($("#choice2").attr("data-value") === "0"){
    incorrect();
  }
  
}
function guessAnswer3() {
  hideQ();
  console.log($("#choice3").attr("data-value"))
  if ($("#choice3").attr("data-value") === "1") {
    correct();
    
  } else if ($("#choice3").attr("data-value") === "0"){
    incorrect();
  }
  
}
function guessAnswer4() {
  hideQ();
  console.log($("#choice4").attr("data-value"))
  if ($("#choice4").attr("data-value") === "1") {
    correct();
    
  } else if ($("#choice4").attr("data-value") === "0"){
    incorrect();
  }
  
}


function setChoiceOne() { 
  var range = Math.floor(Math.random() * 85 + 1930)
  choiceOneYear = range;
  while (range === answerYear || range === choiceOneYear || range === choiceTwoYear || range === choiceThreeYear || range === choiceFourYear) {
    range = Math.floor(Math.random() * 85 + 1930)
  }
  var queryURL = "https://www.omdbapi.com/?t=the&y=" + range + "&apikey=trilogy";
  $.get(queryURL)
    .then(function (response) {

      if ($("#choice1").html() === "") {
        $("#choice1").html(response.Title)
      }
    })
}

function setChoiceTwo() { 
  var range = Math.floor(Math.random() * 85 + 1930)
  choiceTwoYear = range;
  while (range === answerYear || range === choiceOneYear || range === choiceTwoYear || range === choiceThreeYear || range === choiceFourYear) {
    range = Math.floor(Math.random() * 85 + 1930)
  }
  var queryURL = "https://www.omdbapi.com/?t=the&y=" + range + "&apikey=trilogy";
  $.get(queryURL)
    .then(function (response) {
      if ($("#choice2").html() === "") {
        $("#choice2").html(response.Title)
      }
    })
}

function setChoiceThree() { 
  var range = Math.floor(Math.random() * 85 + 1930)
  choiceThreeYear = range;
  while (range === answerYear || range === choiceOneYear || range === choiceTwoYear || range === choiceThreeYear || range === choiceFourYear) {
    range = Math.floor(Math.random() * 85 + 1930)
  }
  var queryURL = "https://www.omdbapi.com/?t=the&y=" + range + "&apikey=trilogy";
  $.get(queryURL)
    .then(function (response) {
      if ($("#choice3").html() === "") {
        $("#choice3").html(response.Title)
      }
    })
}

function setChoiceFour() { 
  var range = Math.floor(Math.random() * 85 + 1930)
  choiceFourYear = range;
  while (range === answerYear || range === choiceOneYear || range === choiceTwoYear || range === choiceThreeYear || range === choiceFourYear) {
    range = Math.floor(Math.random() * 85 + 1930)
  }
  var queryURL = "https://www.omdbapi.com/?t=the&y=" + range + "&apikey=trilogy";
  $.get(queryURL)
    .then(function (response) {
      if ($("#choice4").html() === "") {
        $("#choice4").html(response.Title)
      }
    })
}

setAnswer()