//References to each DOM.
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start");

//Path to each image.
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

//Global variables that change during app.
let currentlyPlaying = true;
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => { //Checks if door contains robot.
  if (door.src === botDoorPath) { //If door contains robot.
    return true;
  } else { //Else door does not contain robot.
    return false;
  }
}

const isClicked = (door) => { //Checks if door clicked is a closed door.
  if (door.src === closedDoorPath) { //If door is still closed.
    return false;
  } else { //Else door is no longer closed.
    return true;
  }
}

const playDoor = (door) => { //Reduces count on number of doors, checks if game is over.
  numClosedDoors--;
  
  if (numClosedDoors === 0) { //If closed doors is 0 then game is won.
    gameOver('win');
  } else if (isBot(door)) { //Else if door contains robot then game is lost.
    gameOver('lose');
  }
}

const randomChoreDoorGenerator = () => { //Randomly chooses which door contains robot, and sets other doors.
  let choreDoor = Math.floor(Math.random() * numClosedDoors); //Returns a number between 0 and 3.
  
  if (choreDoor === 0) { //If door1 contains robot.
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) { //If door2 contains robot.
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) { //If door3 contains robot.
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

doorImage1.onclick = () => { //When user clicks on first door.
  if (currentlyPlaying && !isClicked(doorImage1)) { //If game is still running and door hasn't been opened yet.
    doorImage1.src = openDoor1;
  	playDoor(doorImage1);
  } //Else this click is ignored.
}

doorImage2.onclick = () => { //When user clicks on first door.
  if (currentlyPlaying && !isClicked(doorImage2)) { //If game is still running and door hasn't been opened yet.
    doorImage2.src = openDoor2;
  	playDoor(doorImage2);
  } //Else this click is ignored.
}

doorImage3.onclick = () => { //When user clicks on first door.
  if (currentlyPlaying && !isClicked(doorImage3)) { //If game is still running and door hasn't been opened yet.
    doorImage3.src = openDoor3;
  	playDoor(doorImage3);
  } //Else this click is ignored.
}

startButton.onclick = () => { //When user clicks on start button.
  if (!currentlyPlaying) { //If game isn't already running.
    startRound();
  }
}

startRound = () => { //Gets random values for doors, resets all door images, resets all values to default.
  randomChoreDoorGenerator();
  doorImage1.src = closedDoorPath;
  doorImage1.src = closedDoorPath;
  doorImage1.src = closedDoorPath;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  numClosedDoors = 3;
}

gameOver = (status) => { //Checks if user has won or lost.
  if (status === "win") { //If status is win.
    startButton.innerHTML = "You win! Play again?"
  } else { //Else status is not win.
    startButton.innerHTML = "Game over! Play again?"
  }
  currentlyPlaying = false; //Disables gameboard until user starts a new game.
}

startRound(); //Calls as soon as the page loads.
