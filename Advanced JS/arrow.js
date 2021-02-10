function doSomething(){
    console.log('Doing Something',typeof arguments[0]);
}
doSomething(90);

const func1 = (num1) => console.log('Doing Something in arrow function',arguments[0]);
func1(90);
