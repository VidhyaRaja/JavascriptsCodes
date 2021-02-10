var msg = {
    to:9878999,
    body:'Namsate',
    delivered:true,
    read:false,
    from:989098677
};

msg.date = 1234;
console.log(msg.date);
for(key in msg)
    console.log(msg[key], msg.key);