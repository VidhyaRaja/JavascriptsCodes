/* SameLastDigit: Given 2 non negative numbers
a and b, return true if both of them 
have the same last digit. */

function sameLastDigit(a,b){
    a = a%10;
    b = b%10;
    return a==b?true:false;
}

console.log(sameLastDigit(67845,5688865));