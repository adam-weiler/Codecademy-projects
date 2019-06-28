var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output of 5! is equal to 120.', () => {
      //Setup
      const expectedResult = 120;
      const inputNum = 5;

    	//Exercise
      const result = Calculate.factorial(inputNum)  
      
      //Verify
      assert.equal(result, expectedResult);
    });
    
    it('test if the output of 3! is equal to 6.', () => {
      //Setup
      const expectedResult = 6;
      const inputNum = 3;

    	//Exercise
      const result = Calculate.factorial(inputNum)  
      
      //Verify
      assert.equal(result, expectedResult);
    });
    
    it('returns 1 when you pass in 0.', () => {
      //Setup
      const expectedResult = 1;
      const inputNum = 0;

    	//Exercise
      const result = Calculate.factorial(inputNum)  
      
      //Verify
      assert.equal(result, expectedResult);
    });
    
    it('returns \'undefined\' when you pass in -5.', () => {
      //Setup
      const expectedResult = undefined;
      const inputNum = -5;

    	//Exercise
      const result = Calculate.factorial(inputNum)  
      
      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
