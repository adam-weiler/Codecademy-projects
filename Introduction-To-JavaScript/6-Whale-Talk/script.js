const vowels = ['a', 'e', 'i', 'o', 'u']; //Vowels that whales use. (Ignores Y.)
let input = "Any phrase that you'd like."; //Returns 'Aeeaouuiee'.
// let input = "turpentine and turtles"; //Returns 'Uueeieeauuee'.
// let input = "Hi, Human."; //Returns 'Iuua'.
// let input = "a whale of a deal!"; //Returns 'Aaeeoaeea'.

let resultArray = [];

for (let x=0; x<input.length; x++) { //Iterates through each letter in input.
  // console.log(`${x}: ${input[x]}`);
  
  for (let y=0; y<vowels.length; y++) { //Iterates through each vowel in vowels.
  		// console.log(`${y}: ${vowels[y]}`);
    
    	if (input[x] === vowels[y]) { //If current letter is a vowel.
        // console.log(`There the same! ${input[x]}`);
        resultArray.push(input[x]); //Pushes vowel onto end of resultArray.
        
        if ((input[x] === 'e') || (input[x] === 'u')) //If current letter is special vowel 'e' or 'u'.
          	// console.log(`We should double the letter ${input[x]}.`)
        		resultArray.push(input[x]); //Pushes a second vowel onto end of resultArray.
      }
  }
}

let finalResult = resultArray.join(''); //Joins resultArray into a single string.
finalResult = finalResult.slice(0,1).toUpperCase() + finalResult.slice(1); //Capitalizes the first letter.

console.log(finalResult);
