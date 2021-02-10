function doSomething(abc){
    return abc();
}

function xyz(){
    console.log('Namaste');
}

doSomething(xyz);