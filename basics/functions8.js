// var x = function(){
//     console.log(' Do Something');
// }

// x();


function doSomething(abc){
    abc();
}


// doSomething(function(){
//     console.log('Namaste from anonmysous function');
// });

doSomething(xyz);

function xyz(){
    console.log('Below caller')   ;
}