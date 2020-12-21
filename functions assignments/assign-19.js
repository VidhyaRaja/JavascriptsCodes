/* Give three numbers as input, num1,num2,num3
return true if num1 is greater than at least one
of num2 and num3 */

function greater(a,b,c){
    return a>b || a>c? true: false;
}

console.log(greater(5,9,2));