//Given 2 digit number as input, 
//compute the sum of its digits.

function sumOfDigits(num){
    let x=0, temp;
    while(num!=0){
        temp = num%10;
        num = parseInt(num/10)
        x += temp;
    }
    return x;
}

console.log(sumOfDigits(127));