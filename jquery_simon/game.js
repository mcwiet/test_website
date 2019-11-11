const buttonColors = ["red", "blue", "green", "yellow"];
var randomColor = buttonColors[nextSequence()];
var gamePattern = [];
var currentIndex = 0;
var gameStarted = false;

$(document).on("keypress", function(event){
  if (!gameStarted){
    startGame();
  }
});

$("div.btn").on("click", function() {
  var currentColor = gamePattern[currentIndex];

  $(this).addClass("pressed");
  setTimeout(process => removePressedStyle(this), 100);
  validateSelection(this, currentColor);
});

function removePressedStyle(element){
  $(element).removeClass("pressed");
}

function validateSelection(btn, color){
  if ($(btn).hasClass(color)){
    playColorSound(color);
    if (++currentIndex == gamePattern.length){
      setTimeout(function(){
        addToPattern();
        currentIndex = 0;
      }, 1000);
    }
  } else {
    loseGame();
  }
}

function startGame(){
  gamePattern = [];
  addToPattern();
  gameStarted = true;
  $("#level-title").text("Level " + (currentIndex+1));
}

function loseGame() {
  var sound = new Audio('sounds/wrong.mp3');
  sound.play();
  $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
  randomColor = "";
  currentIndex = 0;
  gameStarted = false;
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

function playColorSound(color){
  var sound = new Audio('sounds/' + color + ".mp3");
  sound.play();
}

function animateButton(color){
  $("#" + color).fadeOut(100).fadeIn(100).fadeOut(10).fadeIn(100);
}

function addToPattern(){
  randomColor = buttonColors[nextSequence()];
  gamePattern.push(randomColor);
  playColorSound(randomColor);
  animateButton(randomColor);
  $("#level-title").text("Level " + (currentIndex+1));
}

function nextSequence(){
  return Math.floor(Math.random() * 4);
}
