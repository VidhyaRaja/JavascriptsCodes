/* MiddleChar: Given three chars as input, 
return the char that would come in the middle 
if the chars were arranged in order. Note that '>'
Operator can be used for chars */

function middleChar(char1, char2, char3){
    let first,second,third;
    if (char3>char2 && char2>char1){
        return char2;
    }else if(char1>char3 && char3>char2){
        return char3;
    }else if(char2>char1 && char1>char3){
        return char1;
    }else if(char3>char1 && char1>char2){
        return char1;
    }else if(char2>char3 && char3>char1){
        return char3;
    }else if(char1>char2 && char2>char3){
        return char2;
    }
}

console.log(middleChar('a','c','b'));
