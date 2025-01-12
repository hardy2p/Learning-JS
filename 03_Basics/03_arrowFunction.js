const user = {
  userName: "Pushpendra Singh",
  age: 30,
  welcomeMessage: function () {
    console.log(`Welcome, ${this.userName}!`);
    console.log(this);
  },
};

// Example usage:
// user.welcomeMessage();
// user.userName="Sam";
// user.welcomeMessage();

// console.log(this);

//Now what is arrow functions

function temp() {
  console.log("Temp function called");
  console.log(this);
}
// temp();

//This inside node env returns {} empty obj
//This inside an browser returns an window object as in browser window obj act as an global object.

//Arrow function
//Introduced in ES6 to write functions in more modern manner

const arrowFunc = () => {
  console.log("Arrow function called");
  console.log(this); //Here this does't return an whole function object like tradiional function expression and function declaration
};
arrowFunc();

const sum = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Enter valid input";
  }
};

console.log(sum(4, 5));
console.log(sum(4, ""));

//Implicit return arrow function
const implicitReturnFunciton = () =>
  "In this we do not write return function explicitly";
console.log(implicitReturnFunciton());

const impSum = (a, b) => a + b;
console.log(impSum(4, 5));

//We can return an object too..
const impObj = () => ({ userName: "Pushpedndra" });
console.log(impObj());

//So In Normal function this can be used and in arrow function this can not be used becuase this will point to empty object in arrow fucntion while in normal function this will point to an function object.
