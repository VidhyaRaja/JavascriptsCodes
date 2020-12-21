/* SumOf4Digits- Compute the sum of its last 4 digits */
function sumOf4Digits(num){
    let lastFourDigits = num%10000, sum=0;
    while(lastFourDigits!=0){
        let temp = lastFourDigits%10;
        lastFourDigits = parseInt(lastFourDigits/10);
        sum += temp
    }
    return sum;
}
console.log(sumOf4Digits(563456));