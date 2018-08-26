var choice1;
var choice2;
var choice3;
var choice4;
var range = Math.floor(Math.random() * 85 + 1930);
var slot;

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
     $("#hint").html(response.Plot)
     $("#year").html(response.Year)
     $(`#choice${slot}`).html(response.Title)
     console.log(response);
     
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
    $("p").css("visibility", "initial")
  }, 2500);
  

}

function setChoiceOne() { 
  var range = Math.floor(Math.random() * 85 + 1930)
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
  var queryURL = "https://www.omdbapi.com/?t=the&y=" + range + "&apikey=trilogy";
  $.get(queryURL)
    .then(function (response) {
      if ($("#choice4").html() === "") {
        $("#choice4").html(response.Title)
      }
    })
}

setAnswer()