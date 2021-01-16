var emp1 =  new Object();
emp1.name = 'Sheldon';
emp1.age = 36;
emp1.id = 78;
emp1.salary = 6789;
emp1.weight = 78;
emp1.joindate = function(){
    return "31 Jan 2000";
}
emp1.resigndate = function(){
    return "28 Feb 2009";
}

console.log(emp1.joindate());
