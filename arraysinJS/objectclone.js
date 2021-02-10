var emp1 = {id:123, name:"Vinay"};
var emp2 = {};

for(var key in emp1){
    emp2[key] = emp1[key];
}

emp2.name = 'Vivaan';

console.log(emp1);
console.log(emp2);