// Given a 4 digit number as input,
//find the value of its hundredth digit

function findHundrethdigit(num){
    var x = parseInt(num/100);
    x = parseInt(x%10);
    return x;
}

console.log(findHundrethdigit(16789532));
