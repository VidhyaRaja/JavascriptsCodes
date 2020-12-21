/* SumLast3: Given a number as input, return the sum of its last 3 digits */

function sumLast3(num){
    let temp, sum=0;
    num = num%1000;
    while(num!=0){
        temp = num%10;
        sum += temp;
        num = parseInt(num/10);
    }
    return sum;
}

console.log(sumLast3(23111));