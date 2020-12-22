function isPrime(num){
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

function generatePrimeNumber(from, to){
    for(i=from;i<=to;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

generatePrimeNumber(1,20);