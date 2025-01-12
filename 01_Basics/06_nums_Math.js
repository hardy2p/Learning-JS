let score = 100; //It is just an number
let newScore = new Number(100); //It is an number object

console.log(score);
console.log(newScore);

//to string converted the no object to string object
console.log(newScore.toString().length);
//console.log(newScore.length); => undefined return

let baseValue = 1500;
let interest = 350;
let balancePerMonth = (baseValue + interest) / 12;

console.log(balancePerMonth.toFixed(3)); //To have decimal precision .toFixed is used
console.log(balancePerMonth.toPrecision(3)); //Precision from starting

//Just to beautify the number
let num = 1000000;
console.log(num.toLocaleString("en-IN"));

//Math Object

console.log(Math);
//It is an math object
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.max(4, 5, 7, 1, 2, 3));
console.log(Math.min(4, 5, 7, 1, 2, 3));
console.log(Math.random()); //Generates random valuen between 0 and 1
console.log(Math.floor(Math.random() * 10)); //Value between 0 and 9

//If min and max are defined and to generate a random number between them
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
