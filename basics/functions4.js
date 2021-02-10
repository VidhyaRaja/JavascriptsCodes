function x(){
    // console.log('x called '+ arguments[0]);
    // console.log('x called '+ arguments.length);
    console.log(arguments);
}

function x(a,b){
    console.log('a: '+ a, 'b: '+ b)
    console.log(arguments);
}


x();
x(123);
x(true,1,1,1,1,50,false,'Yo yo');