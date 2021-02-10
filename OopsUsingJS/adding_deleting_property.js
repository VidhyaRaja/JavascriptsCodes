var msg = {
    to:9878999,
    body:'Namsate',
    delivered:true,
    read:false,
    from:989098677,
    send: function(){
        console.log('Message Sent');
    }
};
msg.send();
msg.date = 1234;

console.log(msg);
delete msg.read;
delete msg.send;
console.log(msg);
