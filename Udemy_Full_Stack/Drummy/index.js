// add buttons to all divs with class .drum and set a click event on each of them
var numOfDrumButtons = document.querySelectorAll(".drum").length;
console.log(numOfDrumButtons);
for (let index = 0; index < numOfDrumButtons; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      var buttonInnerHtml = this.innerHTML;
      console.log(buttonInnerHtml);

      makeSound(buttonInnerHtml);
      animation(buttonInnerHtml);
    });
}

// adding event listener to the whole document
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  makeSound(event.key);
  animation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio("sounds/crash.mp3");
      audio7.play();
      break;

    default:
      break;
  }
}

function animation(key) {
  var currentButton = document.querySelector("." + key);
  currentButton.classList.add("pressed");
  setTimeout(() => {
    currentButton.classList.remove("pressed");
    console.log("timedout");
  }, 100);
}
