function Employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = 'Not Specified';
    this.doSomething = function(){
        console.log('Employee is doing something');
    };
}

var emp1 = new Employee(123,'Jack',606060);
var emp2 = new Employee(7876,'Kate',876588);
emp2.doWork = function(){
    console.log('Employee is working');
}
emp1.city  = 'Bengal'

emp1.doSomething();
emp2.doSomething();
emp2.doWork();          

console.log(emp1);
console.log(emp2);
emp2.gender = 'Female';
console.log(emp2);