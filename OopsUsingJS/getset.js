var emp = {
    name:'Jack',
    salary:606060,
    set setEmpName(empName){
        this.name = empName;
    },
    set empSalary(empSalary){
        this.salary = empSalary;
    },
    get empName(){
        return this.name;
    },
    get empSalary(){
        return this.salary;
    }
}
emp.setEmpName = 'Kate';
emp.empSalary = 89883;
console.log(emp.empName);
console.log(emp.empSalary);     