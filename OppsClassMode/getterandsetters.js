var emp1 = {
    name:'Vivann',
    age:1000,
    dept:'IT',
    getName:function(){
        return this.name;
    }
};

var emp2 = {
    name:'Vivann',
    age:1000,
    dept:'IT',
    get empName() {
        return this.name;
    },
    set empDept(department){
        this.dept = department;
    },

    get empDept(){
        return this.dept;
    }
};

console.log(emp2);
emp2.empDept = "Sales";
console.log(emp2.empDept);
console.log(typeof emp2.empDept);