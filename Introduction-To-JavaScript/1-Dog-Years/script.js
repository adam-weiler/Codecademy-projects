//My current age.
let myAge = 32;

//The first two years of a dog's life.
let earlyYears = 2;
earlyYears *= 10.5;
console.log(`Early years: ${earlyYears} years`);

//My current age after removing the 2 early years.
let laterYears = myAge - 2;

//Each year in my later years is equal to 4 dog years.
laterYears *= 4;
console.log(`Later years: ${laterYears} years`);

//My total age in dog years.
let myAgeInDogYears = earlyYears + laterYears;
console.log(`Total age: ${myAgeInDogYears} years`);

//My name converted to lower case.
let myName = "Adam".toLowerCase();

//Logs the results of all calculations.
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
