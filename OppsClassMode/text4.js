var emp1 = {
    name:'Vinay',
    age:1000,
    dept:'IT'
};

var emp2 = new Object;
for(var key in emp1){
    emp2[key] = emp1[key];
}

emp2.dept = 'Sales';
console.log(emp1);
console.log(emp2);
