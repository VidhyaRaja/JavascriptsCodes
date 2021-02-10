let checkPrime=(num)=>{
    if(num<=3){
        return true;
    }else{
        for(let i=2;i<=parseInt(num/2);i++){
            if(num%i==0)
                return false;
        }
        return true;
    }
}

console.log(checkPrime(5));