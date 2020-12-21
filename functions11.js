//  

var name = 'Jai Hanuman';

function multiply(){
    return num1 * num2;
}

console.log(multiply());

function add(){
    var num1 = 10;
    var num2 = 50;

    function xyz(){
        return num1 + num2 +' '+name;
    }

    return xyz();
}

console.log(add());