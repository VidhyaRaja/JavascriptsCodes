//prime numbers in a range
var from = 1, to = 100;

for(var i=from; i<=to; i++){
    if(i<=3)
        console.log(i);
    for(var j=2;j<=parseInt(i/2);j++){
        if(i%j==0)
            break;
        else
            console.log(i);
            break;   
    }
}