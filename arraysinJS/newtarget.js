function Song(id, duration, artist){
    console.log(new.target);
    if(new.target!=undefined){
        this.id = id;
        this.duration = duration;
        this.artist = artist;
    }else{
        console.log("Should be called only for creating an object");
    }
}

Song();

var obj = new Song();