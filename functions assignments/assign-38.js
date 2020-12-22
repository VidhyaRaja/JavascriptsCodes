/* Perfect Number : ex :6=1+2+3, 
not 24 < 1+2+3+4+6+8+12 */

function perfectNumber(num){
    var x = 0;
    for(var i=1;i<=parseInt(num/2);i++){
        if(num%i==0){
            x+=i;
        }
    }
    return x==num?true:false;
}
console.log(perfectNumber(6));