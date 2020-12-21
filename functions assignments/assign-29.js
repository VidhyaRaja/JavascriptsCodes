/* IsDigit: Given a char as input, 
return true if it is a digit(i.e between 0 to 9) */

function isDigit(value){
    if (isNaN(value)){
        return false;
    }else{
        return true;
    }
}

console.log(isDigit('7'));

