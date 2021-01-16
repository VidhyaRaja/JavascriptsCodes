/* Add a function to raise employee salary by x% percent
. And use this function to raise the salry of employee by 50% and 3rd employee
 salary by 100% */

function Employee(name,salary){
    this.name = name;
    this.salary = salary;
}

Employee.prototype.city = "Not Specified";

Employee.prototype.raiseSalary = function(x){
    this.salary += this.salary*x/100;
}

emp1 = new Employee('Leonard',100);
emp2 = new Employee('Penny',200);
emp3 = new Employee('Raj',300);

emp1.raiseSalary(50);
console.log(emp1);

emp3.raiseSalary(100);
console.log(emp3);

for(x in emp1)
    console.log(x,emp1[x]);
