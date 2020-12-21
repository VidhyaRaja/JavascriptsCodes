/* Reverse3: Given a 3 digit number as input, reverse it. */

function reverse3(num){
    let temp, rev=0;
    while(num!=0){
        temp = num%10;
        num = parseInt(num/10);
        rev = rev*10 + temp;
    }
    return rev;
}

console.log(reverse3(456789));