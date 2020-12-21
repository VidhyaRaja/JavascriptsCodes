/* Multiply37: Given a number n, return true if it is divisible by either 3 or 7 */

function multiply37(num){
    return num%3==0 || num%7==0 ? true:false;
}

console.log(multiply37(21));