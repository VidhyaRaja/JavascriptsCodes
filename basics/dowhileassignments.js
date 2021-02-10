//print fibonacci series (1st 10 numbers)
// var fib = [0,1], max=10, index = 1, next;
do{
    index++;
    next = fib[index-2]+fib[index-1];
    if (next<=max){
        fib[index] = next;
        console.log(fib);
    }
}while(next<max);

/*print numbers from 1 to 200 which 
are divisible by 3 & 6 but not by 5 ?*/
var i = 1;
do{
    if(i%3==0 && i%6==0 && i%5!=0){
        console.log(i);
   }
    i++;
}while(i<=200);

