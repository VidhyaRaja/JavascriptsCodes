var emp1 = new Object();
emp1.name = 'Vinay';
emp1.salary = 606060;
emp1.doWork = function(){
    console.log(this.name+ ' doing work');
}

console.log(emp1);
emp1.doWork();

var emp2 = new Object();
emp2.name = 'Raja';
emp2.salary = 606060;
emp2.doWork = function(){
    console.log(this.name+ ' doing work');
}

console.log(emp1);
emp2.doWork();