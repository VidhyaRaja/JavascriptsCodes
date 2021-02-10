
function doSomthing(){
    return function(){
        console.log('annonymous function')
    };
}

console.log(doSomthing()());

// var myFunc = doSomthing();

myFunc()