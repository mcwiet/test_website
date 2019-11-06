p1Img = document.querySelector('.img1');
p2Img = document.querySelector('.img2');
titleTxt = document.querySelector('#title-txt');

document.addEventListener("load", runDiceGame());

function runDiceGame(){
  var p1 = setPlayerImage(p1Img);
  var p2 = setPlayerImage(p2Img);

  if (p1 > p2)
    titleTxt.textContent = "🚩 Player 1 Wins!";
  else if (p2 > p1)
    titleTxt.textContent = "Player 2 Wins! 🚩";
  else
    titleTxt.textContent = "Draw!";

  return;
}

function setPlayerImage(element) {
  var num = Math.ceil((Math.random() * 5));
  var imgPath = "images/dice" + num + ".png";
  element.setAttribute('src', imgPath);

  return num;
}
