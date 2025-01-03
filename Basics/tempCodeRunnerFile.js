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

// console.log(classInfo);


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