var doSomething = function(){
    return function(){
        console.log("Doing Something");
    }
}

var innerFunction = doSomething();

innerFunction();
doSomething()();