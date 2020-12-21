/* LotteryPrize: If ticket no. is divisible by 4, he gets 6,
if the ticket no. is divisible by 7, he gets 10,
if the ticket number is divisible by both 4 and 7, he gets 20.
Otherwise, he gets 0. */

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

console.log(lotteryPrize(6));