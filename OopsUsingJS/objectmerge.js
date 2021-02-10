var user = { name:"Vinay"};

var loggedInUser = { name:"Hoysala" };
var permissions1 = { canView : true };
var permissions2 = { canEdit : true };

Object.assign(user, loggedInUser, permissions1, permissions2);

console.log(user)