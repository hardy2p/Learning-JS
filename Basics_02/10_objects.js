const myUser={
    name:"Pushpendra",
    "age":23,
    email:"pushpa@gmail.com",
    loggedIn:false,
    lastLoggedIn:["Monday","Tuesday"]
};

console.log(myUser.name);
console.log(myUser.email);
console.log(myUser["age"]);
console.log(myUser.age);
console.log(myUser["loggedIn"]);

myUser.email="newEmail@gmail.com";
console.log(myUser.email);

// Object.freeze(myUser);//Freezes any update to the object
// myUser.age=90;

Object.seal(myUser);//Seals the object and does not allow to add or delete the properties but allows to update the properties.
