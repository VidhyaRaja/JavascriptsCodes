/* ChangeCharCase: A method which accepts a char as input 
and returns a char whose case if changed. */
function changeCharCase(char){
    if (char == char.toUpperCase()){
        return char.toLowerCase();
    }else{
        return char.toUpperCase();
    }
}

console.log(changeCharCase('g'));
