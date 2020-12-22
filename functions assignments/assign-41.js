function isEven(num){
    return num%2==0? true:false;
}

function generateEvenNumbers(from,to){
    for(i=from;i<=to;i++){
        if(isEven(i)){
            console.log(i);
        }
    }
}

generateEvenNumbers(10,20);