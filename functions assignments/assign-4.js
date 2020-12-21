// function getFactorial(num){
//     let answer = 1;
//     if (num == 0 || num ==1){
//         return answer;
//     }else{
//         for(var i=num; i>=1; i--){
//             answer =  answer*i;
//         }
//         return answer;
//     }
// }

// console.log(getFactorial(4));

function getFactorial(num){
    if (num == 0 || num == 1){
        return 1;
    }else{
        return num * getFactorial(num-1);
    }
}

console.log(getFactorial(4));