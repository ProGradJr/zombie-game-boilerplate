//variables and constants

// shotgun sound

// background sound

//lives

//Function to make a zombie

// Function to check if the player missed a zombie

// Function to destroy a zombie when it is shot or missed

//End Game

//start game by calling the first zombie

//helper function to get random integer

// Timer
var timer = setInterval(function () {
  seconds--;
  document.getElementById("timer").textContent = seconds;
  let zombie = document.getElementById("zombie" + zombieId);
  if (checkCollision(zombie) == true) {
    zombieDestruct(zombie);
    if (lives == 0) {
      clearInterval(timer);
      endGame("lost");
    }
  }
  if (seconds == 0) {
    clearInterval(timer);
    endGame("won");
  }
}, 1000);