class Car{
    constructor(height, weight, color){
        this.height = height;
        this.weight = weight;
        this.color = color;
    }

    doSomething(){
        console.log(this.color + 'car is doing something');
    }

    start(){
        console.log(this.color + 'car started');
    }
}

var myCar1 = new Car(100,200,'Blue');
// console.log(myCar1.height);
// console.log(myCar1.weight);
// console.log(myCar1.color);
// myCar1.start();
// myCar1.doSomething();
console.log(Car.height);