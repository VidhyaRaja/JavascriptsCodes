var x = {nation:'Bharat', captital:'Delhi'};
var y = {};

Object.assign(y,x);


y.nation = 'India'
// console.log(y);
// console.log(x);

var a = [10,20,30,40];
var b = [];

for(var item in a)
    b.push(item);

b[0] = 7;
console.log(a);
console.log(b);

