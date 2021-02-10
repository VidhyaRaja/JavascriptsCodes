var myCar = new Object();
myCar.make = 2020;
myCar.color = 'Yellow';
myCar.speed = 0;
myCar.move = function(){
    this.speed++;
};

console.log(typeof myCar);
console.log(myCar.make);
console.log(myCar['color']);

myCar.move();
myCar.move();
console.log(myCar);