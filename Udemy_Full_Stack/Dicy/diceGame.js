var rand1 = Math.floor(Math.random() * 6 + 1);
console.log(rand1);

var rand2 = Math.floor(Math.random() * 6 + 1);
console.log(rand2);

var player1DiceImage = document.querySelector("#player1Image");
var newSrcString = "images/Dices/dice" + rand1.toString() + ".png";
// console.log(newSrcString);
player1DiceImage.setAttribute("src", `${newSrcString}`);
// console.log(player1DiceImage);

var player2DiceImage = document.querySelector("#player2Image");
var newSrcString = "images/Dices/dice" + rand2.toString() + ".png";
// console.log(newSrcString);
player2DiceImage.setAttribute("src", `${newSrcString}`);
// console.log(player1DiceImage);

if (rand1 > rand2) {
  document.querySelector("h1").innerHTML = "🚩 <strong>Player 1 Wins!</strong>";
} else if (rand2 > rand1) {
  document.querySelector("h1").innerHTML = "🚩 <strong>Player 2 Wins!</strong>";
} else {
  document.querySelector("h1").innerHTML = "🚩 <strong>It's a draw !</strong>";
}
