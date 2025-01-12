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

// Object.freeze(myUser);//Freezes any update to the object
// myUser.age=90;

//Object.seal(myUser);//Seals the object and does not allow to add or delete the properties but allows to update the properties.
myUser.greeting=function(){
    console.log(`Hello Sir ${this["name"]}`);
}
//This keyword is used ti refer to the object itself can be used with in an object scope.

myUser.greeting();