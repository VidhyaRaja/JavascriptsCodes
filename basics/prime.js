var num = 4, flag = true;


for(var i=2; i<=parseInt(num/2);i++){
    if(num%i==0){
        flag=false;
        break;
    }
}

if(flag==true)
    console.log(num+' is a prime number.');
else
    console.log(num+' is not a prime number.');

