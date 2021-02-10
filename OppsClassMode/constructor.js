function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.age = -1;
    this.doWork = function(){
        console.log('Employee is doing something');
    }
}

var emp1 = new Employee(123,'Vivana',6006);
var emp2 = new Employee(123,'Gowtha',6006);


Employee.prototype.city = "Not specified";
Employee.prototype.doWork = function(){
    console.log(this.name+' is doing work');
}

emp1.city = "Namma Bengaluru";

console.log(emp1.city);
console.log(emp2.city);

emp1.doWork();
console.log(emp2.doWork);