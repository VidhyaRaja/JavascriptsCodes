function x(){
    console.log('X called');
}

function y(x){
    console.log('Y called',x);
}

// setTimeout(x,3000);

setInterval(y,2000,78);

console.log("hello");