function fibonacci(num) 
{ 
    var num1=0; 
    var num2=1; 
    var sum; 
    var x = [];
    for (i = 0; i < num; i++)  { 
        sum=num1+num2;
        x.push(sum);
        num1=num2; 
        num2=sum; 
    } 
    return x; 
} 

console.log(fibonacci(6));