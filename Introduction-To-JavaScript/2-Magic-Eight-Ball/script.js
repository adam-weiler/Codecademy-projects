let userName = '';
let userQuestion = 'Is the next Marvel movie any good?'

//If the user provides their name it is logged to screen, else it logs a simple hello.
userName ? console.log(`Nice to meet you ${userName}`) : console.log(`Hello user!`);

//Logs question to screen.
console.log(userQuestion);

//Gets a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8) + 1;
console.log(randomNumber)

let eightBall = '';

switch (randomNumber) { //Assigns a prediction to eightball based on random number.
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
  case 8:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'I don\'t know! Ask someone else!';
}

console.log(eightBall);
