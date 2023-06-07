const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
var level = 0;
var userClicks = 0;
var isGameAlive = false;

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    // console.log(event);
    if (!isGameAlive) {
      nextSequence();
    }
  }
});

createButtonsWithClickEvents();
function createButtonsWithClickEvents() {
  var numberOfButtons = document.querySelectorAll(".btn").length;
  for (let index = 0; index < numberOfButtons; index++) {
    document
      .querySelectorAll(".btn")
      [index].addEventListener("click", function () {
        var userChoosencolorId = this.id;
        userClickedPattern.push(userChoosencolorId);
        console.log("userClickedPattern : " + userClickedPattern);
        // console.log(this.id);
        userClicks++;
        animate(this.id);
        playSound(this.id);
        if (gamePattern.length === userClickedPattern.length) {
          setTimeout(() => {
            checkIfCorrect(level - 1);
          }, 1000);
        } else if (gamePattern.length < userClickedPattern.length) {
          gameOver();
        }
      });
  }
}

function nextSequence() {
  level++;
  userClickedPattern.splice(0, userClickedPattern.length);
  document.querySelector("#level").innerHTML = "Current Level : " + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var aiPickedColor = buttonColours[randomNumber];
  gamePattern.push(aiPickedColor);
  console.log("aiPickedColor : " + aiPickedColor);
  setTimeout(() => {
    animate(aiPickedColor);
    playSound(aiPickedColor);
  }, 500);
}

function animate(id) {
  // console.log(id);
  var currentButton = document.querySelector("#" + id);
  currentButton.classList.add("pressed");
  setTimeout(() => {
    currentButton.classList.remove("pressed");
  }, 100);
}

function playSound(colorId) {
  // console.log("sounds/" + id + ".mp3");
  var audio = new Audio("sounds/" + colorId + ".mp3");
  audio.play();
}

function logging() {}

function checkIfCorrect(level) {
  console.log(level);
  if (gamePattern[level] === userClickedPattern[level]) {
    console.log("correct");
    console.log(gamePattern.length);
    console.log(userClickedPattern.length);
    console.log(gamePattern);
    console.log(userClickedPattern);
    nextSequence();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("wrong");
  var headLine = document.querySelector("#level");
  headLine.classList.add("gameover");

  headLine.innerHTML = "Game Over - at level : " + level;
  setTimeout(() => {
    headLine.style.color = "black";
    document.body.style.backgroundColor = "#011f3f";
  }, 200);
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}
