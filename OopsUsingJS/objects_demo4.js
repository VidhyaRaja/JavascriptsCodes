var msg = {
    to:98909889,
    msg:"How are you?",
    delivered:true,
    read:false,
    from:9878989,
    start: function(){
        console.log('Start');
    }
};

for(prop in msg)
    console.log(prop);

for(prop in msg)
    console.log(prop+" : "+msg[prop],msg.prop);

console.log("--------");
console.log(msg["delivered"]);
var keyX = "delivered";
console.log(msg[keyX]);