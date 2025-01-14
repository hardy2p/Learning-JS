//Comparison operator
//==,===,>,<,>=,<= ,!=

if (2 == "2") {
  console.log("double equal execuuted");
}

if (2 === "2") {
  console.log("Triple equal executed");
}
//Logical operator are
// && ,|| , !

//Switch case statement;

const val = 5;

switch (val) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  case 5:
    console.log(5);
    break;
  default:
    console.log("Value not in range 1-5");
    break;
}

//Truthy values and Fasly values ...
//falsy values in js are :-
//false, null, undefined , "", BigInt(0n) , 0 , -0, Nan
//All other are truthy values

const temp = "";
if (temp) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

const temp2 = [];
if (temp2) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

//Ternary operator in js :-
const str = 2 > 1 ? "Two is greater than one" : "One is greater than two";
console.log(str);
//Nullish Coalescing operator(??)
//Fallback and error control mechnanism
//This one is an logical operator used to assing values when some values are null or undefined:
//We feteched email from an API then
const fetchedMail = "singh@gmail.com";
const fetchedMail2 = null;
const email = fetchedMail ?? "No email data avilable";
const email2 = fetchedMail2 ?? "No email data avilable";
console.log(email);
console.log(email2);
