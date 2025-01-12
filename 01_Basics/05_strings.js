let str="Hello ";
let str1=" singh";
console.log(str+str1);

// Strings are a sequence of characters enclosed in single or double quotes.
// Strings are immutable, meaning that they cannot be changed once they are created.
// Strings can be concatenated using the + operator.
//It is better use the `template literals` for string concatenation because it will help us during the real project development.
//Template literals are enclosed in backticks (`) instead of single or double quotes.
//Template literals can contain placeholders, indicated by the dollar sign and curly braces (${expression}).
//Template literals are included in new ES6 features.
//The `template literals` are used to embed expressions in the string.
//It is known as string interpolation.
//We make placeholders and inject vaiables in the string using the ${} syntax.
let name= "Pushpendra";

const greet=((name)=>{
    console.log(`Hello ${name}`);
})

greet(`${name}`);


let userName = new String("Gajendra");//This is an string object
console.log(userName);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.length);
console.log(userName[0]);
console.log(userName.charAt(userName.length-1));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));

//In above methods(functions) the orignal string is not modified beacuse string primitive datatype and they are pass as pass by value.
//So the copy of the value is passed to the function and the orignal value is not modified.
console.log(name.toUpperCase());

//Substring of a string is a consecutive part of the string that is extracted from the original string.
const newName= userName.substring(0,4);//0 is included and 4 is excluded
console.log(newName);
console.log(userName.toString());
//to.String() method is used to convert the object to string.

//Important
//Trim and replace method 
//Trim method is used to remove the white space and Line terminating character from the string.
let email="     pushpendra@gmail.com  "
console.log(email);
console.log(email.trim());
let trimmerdEmail=email.trim();
console.log(trimmerdEmail);//It means it trim() returns an trimmed string
//There are two sub-function of trim fucntion it self too 
//One is trimStart() and other is trimEnd()

console.log(email.trimStart());
console.log(email.trimEnd());

//Trim method is used to trimm down the input from the user to store the nice and non-redundant data in database.



//Replace method is used to replace a substring or a charcater from a stirng to another string or character
let url='http://pushpendra.com/%20/contactUs';
console.log(url);
console.log(url.replace('%20','-'));

//Inclues method
//This method will return true and false taking an string as input return true if the input string is an substring of the url(here).
console.log(url.includes("pushpendra"));//Return true and false


//Convert Object to string :-
let person={
    Name:"Pushpendra",
    age:15,
    Sex:"Male",
    Height:180,
    Weight:78
};
console.log(person);
console.log(person.toString());

let obj={
    0:'H',
    1:'E',
    2:'N'
};
console.log(obj.toString());

//Convert string to an array :-

let words="Hello my name is pushpendra singh and I am not an terriorist. I am just an human who wants love and success a girl to sleep with to whom i can care about as much she cares about me to ";
let arr=words.split(' ');//split(seperator,limit)<: arguments
console.log(arr);


//String object :-
//toString() is not useful here it would be used in other datatypes such as no when we need to convert a  number into string
let temp=new String("Hello World!");
console.log(temp.length);
console.log(temp.toLocaleLowerCase());
console.log(temp.toUpperCase());