var myArray = ['Orange','Blue','Mango','Black'];

var resultArray = myArray.filter(
    function(item){
        return item.startsWith('B');
});

// for(var item of myArray)
//     if(item.startsWith('B'))
//         resultArray.push(item);

console.log(myArray);
console.log(resultArray);