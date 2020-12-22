/* A function accepts a number as input and returns a
 string filled with natural numbers as many as the input. */

 function naturalNumbers(num){
     var value = '';
     for(i=1;i<=num;i++){
        value+=i;
     }
     return value;
 }

 console.log(naturalNumbers(100));