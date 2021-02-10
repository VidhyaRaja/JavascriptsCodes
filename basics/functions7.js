function a(){
    return function doSomething(){
        console.log('Do Something');
    };
}

function b(){
    console.log('b');
}

a()();

var x = a();

x();