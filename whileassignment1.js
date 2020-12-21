
//Write a JS Program to find even 
//number from 10 to 30 ?
var i = 10;
while(i%2==0 && i<=30){
    console.log(i);
    i+=2;
}

//odd numbers from 100 to 150 ?

var x = 100;
while(++x%2!==0 && x<=150){
    console.log(x);
    x++;
}

//check if a number is prime or not ?
var value = 90;
var a = 2;
var flag=true;
while(a<=value/2){
    if(value%a==0){
        flag=flase;
        break;
    }
    a++;
}

if(flag == true)
    console.log("Prime");
else
    console.log("Not a prime");

//prime numbers from 1 to 100 ?
    
var j = 2;
var num = 1;
while(num<=3){
    console.log(num);
    num++;
    while(j<=num/2 && num<=100){
        if(num%j!=0)
            console.log(num);
        num++;
    }
}