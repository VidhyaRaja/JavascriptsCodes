// A function that counts the number of Digits 
//in an INteger (input :145, op: 3 (As there are 3 digits))

function countDigits(num){
    var count = 0;
    while(num!=0){
        num = parseInt(num/10);
        count++;
    }
    return count;
}

console.log(countDigits(345));