console.log(1>2);//false
console.log(1>=1);//True
console.log(1<2);//True
console.log(1<=2);//True
console.log(1==2);//false
console.log(1!=2);//True
console.log(1===2);//False
console.log(1==='1');//False


//Typescript doest allow you to compare two different data types
//Use === instead of == in javascript because == only checks for value and === checks for value and the data type both.

//Lecture 9 : Data Types

const score = 100;
const newScore = 100.3;

console.log(typeof score);
console.log(typeof newScore);


let isLoggedIn=true;
console.log(typeof isLoggedIn);
const outsideTemp=null;
console.log(typeof outsideTemp);

let temp;
console.log(typeof temp);


const id= Symbol('123');
const new_id= Symbol('123');


console.log(id===new_id);
console.log(id);
console.log(new_id.toString());

const heros = ["Shaktimaan", "Krrish", "Baahubali", "Chitti", "Hanuman"];
console.log(heros);


const classInfo = {
    student1: {
        name: "John Doe",
        address: "123 Main St, Anytown, USA",
        age: 16,
        sex: "Male",
        class: "10th Grade",
        section: "A"
    },
    student2: {
        name: "Jane Smith",
        address: "456 Oak St, Anytown, USA",
        age: 15,
        sex: "Female",
        class: "10th Grade",
        section: "B"
    },
    student3: {
        name: "Sam Brown",
        address: "789 Pine St, Anytown, USA",
        age: 17,
        sex: "Male",
        class: "11th Grade",
        section: "A"
    }
};
console.log(classInfo);

let sum=((a,b)=>{
    console.log(a+b);
})
sum(2,3);

function modulo(a,b){
    console.log(a%b);
}
modulo(5,2);


let greet=function(name){
    return "Hello "+name;
}
console.log(greet("Pushpendra"));

let intro = function(name, age){
    console.log("Hello my name is "+name+" and I am  " + age+" years old");
}
intro("Pushpendra", 23);

console.log(typeof greet);//It is called as function object.



let bigNumber=1002545n;
console.log(typeof bigNumber);

//Types of datatypes in JS are:
//1. Primitive Datatypes
//2. Non Primitive Datatypes

//Primitive Datatypes: They are called as primitive datatypes because when ever they are passed to an function or accessed from the memoery a copy of the value is passed not the refrence of the value.
//Types of primitve datatypes are:
//Number, String, Boolean , null , undefined, Symbol,  BigInt:
//Types of Non Primitive Datatypes are:
//Arrays, object , functions

//Now what does typeof return in each case
//Number : Number
//Sting : String
//Boolean : Boolean
//null: object
//undefined: undefined
//Symbol: Symbol(Symbol is used to give different componenet different identity.Used in react and other front end frame work.)
//BigInt: BigInt


//What does typeof return for Non Primitive Datatypes
//Array : Object
//fucntion: obejct function
//Object: Object


const states = {
    "Uttar Pradesh": "Yogi Adityanath",
    "Maharashtra": "Eknath Shinde",
    "Bihar": "Nitish Kumar",
    "West Bengal": "Mamata Banerjee",
    "Madhya Pradesh": "Shivraj Singh Chouhan",
    "Tamil Nadu": "M. K. Stalin",
    "Rajasthan": "Ashok Gehlot",
    "Karnataka": "Basavaraj Bommai",
    "Gujarat": "Bhupendra Patel",
    "Andhra Pradesh": "Y. S. Jagan Mohan Reddy",
    "Odisha": "Naveen Patnaik",
    "Telangana": "K. Chandrashekar Rao",
    "Kerala": "Pinarayi Vijayan",
    "Jharkhand": "Hemant Soren",
    "Assam": "Himanta Biswa Sarma",
    "Punjab": "Bhagwant Mann",
    "Chhattisgarh": "Bhupesh Baghel",
    "Haryana": "Manohar Lal Khattar",
    "Uttarakhand": "Pushkar Singh Dhami",
    "Himachal Pradesh": "Jai Ram Thakur",
    "Tripura": "Manik Saha",
    "Meghalaya": "Conrad Sangma",
    "Manipur": "N. Biren Singh",
    "Nagaland": "Neiphiu Rio",
    "Goa": "Pramod Sawant",
    "Arunachal Pradesh": "Pema Khandu",
    "Mizoram": "Zoramthanga",
    "Sikkim": "Prem Singh Tamang"
};

console.log(states);
