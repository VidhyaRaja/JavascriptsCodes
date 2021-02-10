// Object.defineProperty()

var obj = { 
    counter:5
};

Object.defineProperty(obj,"reset", {
    get : function(){
        this.counter = 0;
    }
});
Object.defineProperty(obj,"increment",{
    get:function(){
        this.counter++;
    }
});

//obj.reset;
console.log(obj.counter);
