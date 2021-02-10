//number to check
var num = 5;

//this count is used to get to increment as we get a reminer 0
var count = 0;

//start a loop from 1 and loop up to the number entered
for (var i = 1; i <= num; i++) {
    //check number / i  is giving remainder 0
    if (num % i == 0) {
    //then increment count value
    count++;
    }
}

//if count value increases and equal to 2 then print prime else not a prime
if (count == 2) {
    console.log("prime");
} else {
    console.log("not prime");
}