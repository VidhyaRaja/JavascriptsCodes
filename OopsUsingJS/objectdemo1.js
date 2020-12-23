var car = {
    name:'Tata Nexon',
    color:'Orange',
    speed:0,
    move:function doMove(){
        this.speed++;
        console.log(this.speed);
    }
};

console.log(car);
car.move();
car.move();
console.log(car);
