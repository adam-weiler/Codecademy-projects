public class Magic {
	public static void main(String[] args) {
    // Enter in a secret whole number below.
    int myNumber = 42;
    int stepOne = myNumber * myNumber;
    int stepTwo = stepOne + myNumber;
    int stepThree = stepTwo / myNumber;
    int stepFour = stepThree + 17;
    int stepFive = stepFour - myNumber;
    int stepSix = stepFive / 6;
    
    // Your secret number is printed out.
    System.out.println(myNumber);
	}
}
