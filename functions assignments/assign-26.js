/* LargestOfThree: Given three numbers as input, return the largest number. */

function largestOfThree(num1, num2, num3){

    return num1>num2 && num1>num3 ? num1:num2>num1 && num2>num3 ? num2:num3;
   
}

console.log(largestOfThree(9,6,8));