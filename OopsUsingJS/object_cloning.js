var x = {nation:'Bharat', captital:'Delhi'};
var y = {};

for(var key in x)
    y[key] = x[key];


y.nation = 'India'
console.log(y);
console.log(x);