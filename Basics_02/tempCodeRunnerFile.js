const mySym = Symbol("symBol Key");

const myUser={
    name:"Pushpendra",
    "age":23,
    email:"pushpa@gmail.com",
    loggedIn:false,
    lastLoggedIn:["Monday","Tuesday"],
    [mySym]: "symbol key"
};

// console.log(myUser[mySym]);
// console.log(myUser.name);
// console.log(myUser.email);
// console.log(myUser["age"]);
// console.log(myUser.age);
// console.log(myUser["loggedIn"]);

myUser.email="newEmail@gmail.com";
// console.log(myUser.email);
