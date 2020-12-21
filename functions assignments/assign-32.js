/* AddForThird: Given three numbers a,b and c, return true
 if the sum of any two equals the third number */

 function addForThird(a,b,c){
     let sum1=a+b, sum2=b+c, sum3=a+c;
     if(sum1==a || sum1==b || sum1==c){
         return true;
     }else if(sum2==a || sum2==b || sum2==c){
         return true;
     }else if(sum3==a ||sum3==b ||sum3==c){
         return true;
     }else{
         return false;
     }
 }

 console.log(addForThird(2,5,5));