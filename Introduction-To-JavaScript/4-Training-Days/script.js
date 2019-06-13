const getRandEvent = () => { //Randomly chooses one of 3 race-type.
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};


const getTrainingDays = event => { //Returns how many days to train based on type of race-type.
	let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};


const logEvent = (event, name) => { //Logs runner's name with race-type.
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days, name) => { //Logs runner's name with days to train.
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);


const name = 'Nala'; //Creates a new runner and calls logEvent, logTime.
logEvent(event, name);
logTime(days, name);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren'; //Creates a new runner and calls logEvent, logTime.
logEvent(event2, name2);
logTime(days2, name2);
