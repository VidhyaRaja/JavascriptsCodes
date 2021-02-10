function User() {
    console.log(new.target);
    if(new.target!= undefined){
        console.log('Hi');
    }else{
        console.log('Bye');
    }
}

User();
var obj = new User();