var car1 = {
    color:'Yellow',
    model:'XYZ',
    speed:0,
    engine_power:'90',
    size:34,
    name:'Suzuki',
    weight:34,
    airbag:true,
    start:function(){
        console.log(this.name+" "+" is starting");
    },
    move:function(){
        console.log(this.name+" "+" is moving in "+this.speed+" speed")
    },
    stop:function(){ 
      console.log(this.name+" "+" has stopped");  
    }
};

car2 = {
    color:'Pink',
    model:'RTY',
    speed:100,
    engine_power:'90',
    size:34,
    name:'BMW',
    weight:34,
    airbag:true,
    start:function(){
        console.log(this.name+" "+" is starting");
    },
    move:function(){
        console.log(this.name+" "+" is moving in "+this.speed+" speed")
    },
    stop:function(){ 
      console.log(this.name+" "+" has stopped");  
    }
}
console.log(car1);
car1.start();
car2.move();