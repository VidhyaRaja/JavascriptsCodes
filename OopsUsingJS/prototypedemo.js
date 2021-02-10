function Employee(id, name){
    this.id = id;
    this.name = name;
}

Employee.prototype.city = 'Not Specified';

Employee.prototype.doSomething = function(){
    console.log(this.name + ' is doing something');
}

var emp1 = new Employee(123,'Jack');
var emp2 = new Employee(500,'Ross');

console.log(emp1.city='hello');
console.log(emp2.city);

emp1.doSomething();
emp2.doSomething();

console.log(emp1);
console.log(emp2);

for(prop in emp1)
    console.log(prop);

console.log('id' in emp1);
