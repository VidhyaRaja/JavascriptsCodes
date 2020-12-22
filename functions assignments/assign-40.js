/* A function accepts a number as input and returns a 
string filled with random integers as many as the input */

function randomIntegers(num){
    var x = '';
    for(i=1;i<=num;i++){
        x+=parseInt(Math.random()*10);
    }
    return x;
}

console.log(randomIntegers(10));