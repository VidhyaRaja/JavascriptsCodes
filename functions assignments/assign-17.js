//Given 2 digit number as input, 
//compute the sum of its digits.

function sum2digit(num){
    var x,y =[];
    x = num.toString().split('');
    for (var i=0; i<=x.length-1;i++){
        sum = Number(x[i]) + Number(x[i+1]);
        return sum;
    }
}

console.log(sum2digit(12));