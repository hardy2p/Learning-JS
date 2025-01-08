/**
 * Declares a variable `userName` and assigns it a string value.
 * In JavaScript, primitive data types like strings are stored in the stack.
 */
let userName="Pushpendra Singh";
console.log(userName);
let newName=userName;
console.log(newName);
newName="Harpreet Brar";
console.log(newName);
console.log(userName);


//Heap is used to store the non primitve datatypes like arrays, objects and functions.

let userData={
    email:"Pushpendra@gmail.com",
    age:23,
}
console.log(userData.email);
let newUserData=userData;
newUserData.email="newemail@gmail.com";
console.log(newUserData.email);
console.log(userData.email);
