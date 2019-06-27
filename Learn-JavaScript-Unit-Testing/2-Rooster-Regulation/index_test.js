const assert = require('assert');
const Rooster = require('../index');

describe('index.js tests', () => {
  describe('.announceDawn method', () => {
    it('returns a rooster call', () => {
      //Setup: Define expected output
      const expected = 'cock-a-doodle-doo!'; //Rooster noise.
      
      //Exercise: Call Rooster.announceDawn and store result in a variable.
      const result = Rooster.announceDawn();
      
      //Verify: Use an assert method to compare the actual and expected result.
      assert.equal(result, expected);
      
      //Teardown: Reset testing environment.
      //Not necessary.
    });
  });
  
  describe('.timeAtDawn method', () => {
    it('returns its argument as a string', () => {
      //Setup: Define expected output
			const inputNumber = 6;
      
      //Exercise: Call Rooster.timeAtDawn with argument 6 and stores result in a variable.
			const result = Rooster.timeAtDawn(inputNumber);
      
      //Verify: Use an assert method to check if result is a string.
			assert.strictEqual(typeof result, 'string');
      
      //Teardown: Reset testing environment.
      //Not necessary.
    });
    
    it('throws a range error if passed a number less than 0', () => {
      //Setup: Define expected output
			const inputNumber = -1;
      const expected = RangeError;
      
      //Exercise: Call Rooster.timeAtDawn with argument 6 and stores result in a variable.
			const result = Rooster.timeAtDawn(inputNumber);
      
      //Verify: Use an assert method to check if result is a string.
			assert.throws(() => {
        result
    	}, expected);
      
      //Teardown: Reset testing environment.
      //Not necessary.
    });
    
  it('throws a range error if passed a number greater than 23', () => {
      //Setup: Define expected output
			const inputNumber = 24;
      const expected = RangeError;
      
      //Exercise: Call Rooster.timeAtDawn with argument 6 and stores result in a variable.
			const result = Rooster.timeAtDawn(inputNumber);
      
      //Verify: Use an assert method to check if result is a string.
			assert.throws(() => {
        result
    	}, expected);

      //Teardown: Reset testing environment.
      //Not necessary.
    });
  });
});
