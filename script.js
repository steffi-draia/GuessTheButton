var chosenColour = -1;
function chooseRandomButtonId(max) {
  return Math.floor(Math.random() * max);
}
chosenColour = choosedRandomButtonId(3);
function getRightColor() {
  switch(chosenColour) {
    case 0: {
      return "Wrong colour! Chosen colour is yellow";
    } break;
    case 1: {
      return "Wrong colour! Chosen colour is green";
    } break;
    case 2: {
      return "Wrong colour! Chosen colour is black";
    } break;
    default : {
      return "Wrong colour! Chosen colour is unknown";
    } break;
  }
}

function isWinningButton(buttonId) {
  var clickedButton = document.getElementById('showMessage');
  if (buttonId == chosenColour) {
    clickedButton.innerHTML = "Well done! Right colour chosen!";
  } else {
    clickedButton.innerHTML = getRightColor();
  }
  chosenColour = chooseRandomButtonId(3);
}
