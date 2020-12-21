// A function that accepts an integer and returns the digits repeated twice.
// ip:12, op:1212

function countDigits(num){
    var count = 0;
    while(num!=0){
        num = parseInt(num/10);
        count++;
    }
    return count;
}

function getTwiceTheNumber(num){
    let noOfDigits = countDigits(num);
    var x = '1';
    while (noOfDigits!=0){
        x += '0';
        noOfDigits--;
    }
    x = Number(x);
    num = num*x + num;
    return num
}
console.log(getTwiceTheNumber(12));