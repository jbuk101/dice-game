function rollDice() {
  var dice1 = document.querySelector(".img1");
  var dice2 = document.querySelector(".img2");
  var title = document.querySelector("h1");

  // Add animation class
  dice1.classList.add("dice-roll");
  dice2.classList.add("dice-roll");

  // Remove animation class after animation ends so it can be reapplied
  setTimeout(() => {
    dice1.classList.remove("dice-roll");
    dice2.classList.remove("dice-roll");

    // Generate random numbers
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Update dice images
    dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    // Update title
    if (randomNumber1 > randomNumber2) {
      title.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      title.textContent = "Player 2 Wins! 🚩";
    } else {
      title.textContent = "It's a Draw!";
    }
  }, 500); // Match this to the animation duration
}