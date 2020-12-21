function lotteryPrize(num){
    if(num%4==0 && num%7==0){
        return 20;
    }else if(num%7==0){
        return 10;
    }else if(num%4==0){
        return 6;
    }else{
        return 0;
    }
}

function totalReward(num1, num2, num3){
    let reward1, reward2, reward3;
    reward1 = lotteryPrize(num1);
    reward2 = lotteryPrize(num2);
    reward3 = lotteryPrize(num3);
    return reward1+reward2+reward3;
}

console.log(totalReward(21,28,5));