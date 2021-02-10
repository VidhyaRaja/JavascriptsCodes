x =1;
if(x)
    console.log(x+": is true");

var x = -10;
if(x)
    console.log('true');
else
    console.log('false');

x = 0;
if(x)
    console.log('true');
else
    console.log('false');

x = Infinity;
if(x)
    console.log('true');
else
    console.log('false');

x = -Infinity;
if(x)
    console.log('true');
else
    console.log('false');

x = "0";
if(x)
    console.log('true');
else
    console.log('false');

x = "Yp Yo";
if(x)
    console.log('true');
else
    console.log('false');

x = NaN;
if(x)
    console.log('true');
else
    console.log('false');

x = undefined;
if(x)
    console.log('true');
else
    console.log('false');

x = null;
if(x)
    console.log('true');
else
    console.log('false');

x=Symbol();
if(x)
    console.log(String(x)+' true');
else
    console.log(String(x)+' false');

x = {a:1};
if(x)
    console.log('true');
else
    console.log('false');

x = " ";
if(x)
    console.log('true');
else
    console.log('false');
