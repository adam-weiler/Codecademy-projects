let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(`${secretMessage}\n`);
// console.log(`${secretMessage.length} \n`);

secretMessage.pop(); //Removes the last string from array.
console.log(`${secretMessage}\n`);
// console.log(`${secretMessage.length} \n`);

secretMessage.push('to'); //Adds 'to' to end of array.
secretMessage.push('Program'); //Adds 'Program' to end of array.
console.log(`${secretMessage}\n`);
// console.log(`${secretMessage.length} \n`);

secretMessage[7] = 'right'; //Replace word 'easily' with 'right'.
console.log(`${secretMessage}\n`);
// console.log(`${secretMessage.length} \n`);

secretMessage.shift(); //Removes the first string from array.
console.log(`${secretMessage}\n`);
// console.log(`${secretMessage.length} \n`);

secretMessage.unshift("Programming"); //Add 'Programming' to beginning of array.
console.log(`${secretMessage}\n`);
// console.log(`${secretMessage.length} \n`);

secretMessage.splice(6, 5, 'know'); //Starting at index 6, removes 5 values, and replaces with 'know'.
console.log(`${secretMessage}\n`);
// console.log(`${secretMessage.length} \n`);

console.log(secretMessage.join(' ')); //Joins each value of array into single string.
