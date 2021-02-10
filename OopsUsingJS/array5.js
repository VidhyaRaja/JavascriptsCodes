var myArray = ["Modi","Rahul",
"Nograj", "Amith", "Yedurappa", "Gandhi","Nikhil","ram"];

function f1(x){
    return x == 'Nograj';
}
// console.log(myArray.findIndex(f1));

var newArray =  myArray.splice(2,5);
for(item of newArray)
    console.log(item);

myArray.push("Surya");
console.log(myArray);
console.log(myArray.pop());

