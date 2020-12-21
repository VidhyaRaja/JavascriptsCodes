
function checkPrime(num){

    //num = Math.abs(num); // Converts -ve number to positive

    if (num<=3){
        return true;
    }
    else{
        for(var i=2; i<=parseInt(num/2);i++){
            if(num%i==0){
                return false;
            }
            return true;
        }
    }
}

console.log(checkPrime(-15));
