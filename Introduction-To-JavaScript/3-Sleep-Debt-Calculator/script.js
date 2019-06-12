const getActualSleepHours = (sun, mon, tues, wed, thurs, fri, sat) =>  sun + mon + tues + wed + thurs + fri + sat; //Calculates total hours of sleep for each day of the week.


const getIdealSleepHours = idealHours => idealHours * 7; //Calculates ideal sleep hours based on user input of how many hours they'd like to sleep in a night.


const calculateSleepDebt = () => { //Evaluates if user got enough hours of sleep.
  let actualSleepHours = getActualSleepHours(9, 5, 6, 6, 7, 6, 17); //Calculates total hours of sleep in the week.
  let idealSleepHours = getIdealSleepHours(8); //Calculates ideal hours based on 8 hours of sleep a night.
  
  if (actualSleepHours === idealSleepHours) { //If hours slept is the same as ideal number of hours.
    return('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) { //Else if hours slept is greater than ideal number of hours.
    return('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed. Don\'t oversleep.');
  } else if (actualSleepHours < idealSleepHours) { //Else if hours slept is less than ideal number of hours.
    return('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed. Get some rest.');
  }
}


console.log(`Actual Sleep Hours: ${getActualSleepHours(9, 5, 6, 6, 7, 6, 17)}`);
console.log(`Ideal Sleep Hours: ${getIdealSleepHours(8)}`);
console.log(calculateSleepDebt());
