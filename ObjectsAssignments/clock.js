function Clock(hours, minutes, seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.setClock = function(seconds){
        this.hours = parseInt(seconds/3600);
        this.minutes = parseInt((seconds - (this.hours*3600))/60);
        this.seconds = seconds - (this.hours*3600)-(this.minutes*60);
    }

    this.gettime = function(){
        return this.hours+':'+this.minutes+':'+this.seconds;
    } 
    this.settime =  function(hours,minutes,seconds){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    this.tick = function(){
        this.seconds++;
        if(this.seconds == 60){
            this.minutes++;
            this.seconds = 0;
        }

        if(this.minutes == 60){
            this.hours++;
            this.minutes = 0;
        }

        if(this.hours == 24){
            this.hours = 0;
        }
    }
    this.addClock = function(obj){
        this.hours = this.hours + obj.hours;
        this.minutes = this.minutes + obj.minutes;
        this.seconds = this.seconds + obj.seconds;
    }
    this.now = function(){
        return this.hours+':'+this.minutes+':'+this.seconds;
    }
    this.tickDown = function(){
        this.seconds--;
    }
}

time1 = new Clock(1,20,10);
console.log(time1.gettime());
time1.setClock(600);
console.log(time1.gettime());
var time2 = new Clock(2,10,30);
console.log(time2.gettime());
time2.addClock(time1);
console.log(time2.gettime());
time2.tickDown()
console.log(time2.gettime());
