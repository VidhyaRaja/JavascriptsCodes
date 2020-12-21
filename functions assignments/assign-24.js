/* AddDigitNumbers: Given three digits as input,
create a 4 digit number out of each input in which all
the digits are the same and then add all the 3 numbers
and return the value (ip:1,2,3 op:1111+2222+3333) */

function addDigitNumbers(num1, num2, num3){
    num1 = returnFourDigitNumber(num1);
    num2 = returnFourDigitNumber(num2);
    num3 = returnFourDigitNumber(num3);
    return num1+num2+num3;
}

function returnFourDigitNumber(num){
    x = num *10+num;
    x = x*10+num;
    x = x*10+num;
    return x;
}

console.log(addDigitNumbers(1,2,3));