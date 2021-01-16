function Song(name,id,year,singer,movie){
    this.name = name;
    this.id = id;
    this.year = year;
    this.singer = singer;
    this.movie = movie;
    this.song = function(){
        return this.name+" is playing"; 
    };
    this.singer = function(){
        console.log(this.singer+" is the singer");
    };
}

var song1 = new Song("Hosana",90,2002,"Ross","ABC");
var song2 = new Song("Rock",12,2012,"Rachel","XYZ");
var song3 = new Song("Melody",34,1990,"Joey","MNO");


console.log(song2.song());

song3.music = function(){
    console.log("Carnatic Music");
}

song3.music();

console.log(song2);

delete song2.singer;

console.log(song3);



