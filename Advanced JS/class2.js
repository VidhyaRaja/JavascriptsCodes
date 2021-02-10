let Rectangle = class {
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.area = function (){
            return "area";
        }
    }

    sayHi(){
        console.log("abc");
    }
};

//  console.log(Rectangle.name);

let obj = new Rectangle(100,200);
console.log(typeof obj);