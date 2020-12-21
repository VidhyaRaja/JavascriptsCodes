function blackJack(a,b){
    if(a<21 && b<21){
        if(a<b){
            return b;
        }else{
            return a;
        }
    }else if(a<21){
        return a;
    }else if(b<21){
        return b;
    }else if(a>21 || b>21){
        return -1;
    }else if(a==21 || b==21){
        return -2;
    }
}

console.log(blackJack(21,32));