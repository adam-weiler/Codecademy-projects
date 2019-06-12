const getUserChoice = (userInput) => { //Verifies user input is an appropriate choice.
  userInput = userInput.toLowerCase(); //Converts word to lowercase.
  
  if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb')) { //If user entered rock, paper, scissors, or bomb.
    return userInput;
  } else { //Else there is an error.
    console.log ('Error; you did not pick Rock, Paper, or Scissors. \n');
  }
}


const getComputerChoice = () => { //Chooses a random value for computer choice.
  let randomNum = Math.floor(Math.random() * 3); //Gets a random value between 0 to 2.
  
  switch (randomNum) { //Assigns rock, paper, or scissors based on random number.
    case 0:
    	return 'rock';
    case 1:
    	return 'paper';
    case 2:
    	return 'scissors';
  }
}


const determineWinner = (userChoice, computerChoice) => { //Evaluates if user or computer won the game.
  if (userChoice === 'bomb') { //User always wins with bomb.
    return(`You always win with that!`);
  }
  
  if (userChoice === computerChoice) { //User and computer chose the same, so it is a tie.
    return(`It looks like it's a tie!`);
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') { //User chose rock and computer chose paper, so computer won.
      return(`It looks like the computer won!`);
    } else { //Else user chose rock and computer chose scissors, so user won.
      return(`It looks like you won!`);
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') { //User chose paper and computer chose scissors, so computer won.
      return(`It looks like the computer won!`);
    } else { //Else user chose paper and computer chose rock, so user won.
      return(`It looks like you won!`);
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') { //User chose scissors and computer chose rock, so computer won.
      return(`It looks like the computer won!`);
    } else { //Else user chose scissors and computer chose paper, so user won.
      return(`It looks like you won!`);
    }
  }
}


const playGame = (userInput) => { //Gets user input, random chose for computer, and prints to screen result of the game.
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();
  
  if (userChoice) { //Checks that user choice exists.
    console.log(`You chose ${userChoice}.`);
    console.log(`The computer chose ${computerChoice}.`);

    console.log(determineWinner(userChoice, computerChoice) + '\n');
  } //Else no user choice, they entered an invalid choice.
}


playGame('Rock');
playGame('pAPER');
playGame('sCiSsOrS');
playGame('Gun');
playGame('Bomb');
