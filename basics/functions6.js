var i = function k(){
    console.log('k');
}
console.log(i);

function abc(x){
    //console.log(x);
    x();
}

function doSomething(){
    console.log('Doing Something');
}

abc(doSomething);
abc(i);
abc(function j(){
    console.log('j');
}); 