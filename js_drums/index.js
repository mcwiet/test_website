var numDrums = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function (e) {
  playSound(e.key);
  animateButton(e.key);
});

for (var i = 0; i < numDrums; ++i){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    animateButton(this.innerHTML);
  });
}

function animateButton(letter){
  var activeButton =  document.querySelector("." + letter);

  activeButton.classList.add("pressed");

  setTimeout( function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

function playSound(letter){
  var audio;
  switch (letter) {
    case 'w':
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case 'a':
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case 's':
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case 'd':
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case 'j':
      audio = new Audio("sounds/snare.mp3");
      break;
    case 'k':
      audio = new Audio("sounds/crash.mp3");
      break;
    case 'l':
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log(letter);
      return;
  }
  audio.play();
}
