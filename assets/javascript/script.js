var slot;
var wins = 0;
var losses = 0;
var answerYear;
var choiceOneYear;
var choiceTwoYear;
var choiceThreeYear;
var choiceFourYear;

function setAnswer() {
var range = Math.floor(Math.random() * 85 + 1930)
// range = Math.floor(Math.random() * 85 + 1930)

slot = Math.floor(Math.random() * 4 +1);

var queryURL = "https://www.omdbapi.com/?t=the&y=" + range + "&apikey=trilogy";
   $.get(queryURL)
   .then(function(response) {
     $("#choice1").html("")
     $("#choice2").html("")
     $("#choice3").html("")
     $("#choice4").html("")
     $("#choice1").attr("data-value", "")
     $("#choice2").attr("data-value", "")
     $("#choice3").attr("data-value", "")
     $("#choice4").attr("data-value", "")
     $("#hint").html(response.Plot)
     $("#year").html(response.Year)
     $(`#choice${slot}`).html(response.Title)
     $(`#choice${slot}`).attr("data-value", 1)
     console.log(response);
     answerYear = response.Year;
   }).catch(function (error) {
     console.error(error);
    });
  }

  function setChoices(){
    setTimeout(function () {
      setChoiceOne(); 
      setChoiceTwo(); 
      setChoiceThree();
      setChoiceFour();
    }, 1000);
    setTimeout(function () {
      $("#stuff").css("visibility", "initial")
    }, 2500);
  }

function hideQ() {
  $("#stuff").css("visibility", "hidden")
}
function showQ() {
  $("#stuff").css("visibility", "initial")
}

function guessAnswer1() {
  console.log($("#choice1").data("value"))
  if ($("#choice1").data("value") === 1) {
    wins++
    $("#right").html(wins)
    hideQ();
    setAnswer();
    setChoices();
  } else {
    losses++
    hideQ();
    setAnswer();
    setChoices();
    $("#rong").html(losses);
  }
}
function guessAnswer2() {
  console.log($("#choice2").data("value"))
  if ($("#choice2").data("value") === 1) {
    wins++
    $("#right").html(wins)
    hideQ();
    setAnswer();
    setChoices();
  } else {
    losses++
    hideQ();
    setAnswer();
    setChoices();
    $("#rong").html(losses);
  }
  
}
function guessAnswer3() {
  console.log($("#choice3").data("value"))
  if ($("#choice3").data("value") === 1) {
    wins++
    $("#right").html(wins)
    hideQ();
    setAnswer();
    setChoices();
  } else {
    losses++
    hideQ();
    setAnswer();
    setChoices();
    $("#rong").html(losses);
  }
  
}
function guessAnswer4() {
  console.log($("#choice4").data("value"))
  if ($("#choice4").data("value") === 1) {
    wins++
    $("#right").html(wins)
    hideQ();
    setAnswer();
    setChoices();
  } else {
    losses++
    hideQ();
    setAnswer();
    setChoices();
    $("#rong").html(losses);
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