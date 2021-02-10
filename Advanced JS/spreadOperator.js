//spread operator

let add = (num1, num2) => {
    console.log(num1, num2);
}

let numbers = [4,5,6,7,9];;
// console.log(add(...numbers));

//append

let array1 = ['Blue','Orange','White'];
let array2 = ['Black','Purple'];

let array3 = [...array1,...array2];
let array4 = [...array1,array2];
console.log(array3);
console.log(array4);