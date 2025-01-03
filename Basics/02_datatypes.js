"use strict";

console.log("Hello");
let a = 45;
let names = "Pushpa";
let bro = "kanu";
let student = {
  Class: 8,
  age: 12,
  section: "B",
};
console.log(typeof a);
console.log(typeof names);
console.log(typeof bro);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof student);

let arr = [4, 2, 3, 3];
console.log(arr[0]);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("Break");

for (let i of arr) {
  console.log(i);
}
console.log("Break");
arr.forEach((num, index) => {
  console.log(`The num is ${num}`);
});

console.log("Break");

let persons = [
  { firstName: "Pushpendra", lastName: "Singh" },
  { firstName: "Gajendra", lastName: "Singh" },
];
//.map function is used to generate a new Array by manipulating(from) the old array elements
let newArr = persons.map(func);

function func(obj) {
  return `${obj.firstName} ${obj.lastName}`;
}
console.log(newArr);

//.reduce function is used to generate a single output
let sum = arr.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(sum);

let nums = [
  [4, 5],
  [1, 2],
  [7, 8],
];
let flattenNums = nums.reduce((acc, arr) => {
  return acc.concat(arr);
}, []);
console.log(flattenNums);

//finding the max element from the aray by iterating over it
let max = arr.reduce((acc, val) => {
  return val > acc ? val : acc;
}, -Infinity);
console.log(max);
//.filter method in js
//return an new array generated from the previous array containing those elements which satisfy a certain condition
let filterArr = arr.filter((val, index) => {
  return index > 1;
});
console.log(filterArr);
