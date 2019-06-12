let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10); //Gets a random value between 0 to 9.
}


const compareGuesses = (currentHumanGuess, computerGuess, target) => { //Evaluates if human or computer guessed closest to target.
  let humanDiff = getAbsoluteDistance(currentHumanGuess, target);
  let computerDiff = getAbsoluteDistance(computerGuess, target);
  
  if (computerDiff === humanDiff) { //Human and computer guesses were equally close to target. It's a tie.
    console.log(`${computerDiff} = ${humanDiff} - It's a tie!`);
    return true;
  } else if (computerDiff > humanDiff) { //Human guess is closer to target. Human wins.
    console.log(`${computerDiff} > ${humanDiff} - Human wins!`);
    return true;
  } else if (computerDiff < humanDiff) { //Computer guess is closer to target. Computer wins.
    console.log(`${computerDiff} < ${humanDiff} - Computer wins!`);
    return false;
  }  
}


const getAbsoluteDistance = (guess, target) => { //Returns a positive number for how close the guess is to target.
	return Math.abs(guess - target);
}


const updateScore = (winner) => { //Updates the score based on who won the round.
  if (winner === 'human') {
    humanScore ++;
  } else if (winner === 'computer') {
    computerScore ++;
  }
}


const advanceRound = () => { //Advances to the next round.
  currentRoundNumber++;
}
