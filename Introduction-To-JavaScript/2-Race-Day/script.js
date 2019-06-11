let raceNumber = Math.floor(Math.random() * 1000); //Gets a random number between 0 and 999.

//A variable that indicates if a runner registered early or not.
let registeredEarly = false;
let runnerAge = 42;

if (runnerAge > 18 && registeredEarly) { //Adults that registerd early get a race number above 1000.
  raceNumber += 1000;
}

if ((runnerAge > 18) && (registeredEarly)) { //Adults who registered early.
  console.log(`Early registration adult: You will race at 9:30am.`);
} else if ((runnerAge > 18) && (!registeredEarly)) { //Adults who registered late.
  console.log(`Late registration adult: You will race at 11:00am.`);
} else if (runnerAge < 18) { //Youth. Doesn't matter when they registered.
  console.log(`Youth: You will race at 12:30pm.`);
} else { //Else runners are exactly 18. Doesn't matter when they registered.
  console.log(`There is an error. Please see the registration desk.`);
}

if (runnerAge != 18) { //Displays the race number if age is not 18.
  console.log(`Your race number is: ${raceNumber}`);
}
