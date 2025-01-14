//Loops are used to iterate over the iterables such as arrays, objects, and strings.
// There are multiple types of loops used in JavaScript for different purposes
// Some are for arrays, some for objects
//Used to iterate over itrable in js 
//Iterable in js are array , stirng , set and map


// For of Loop
const heroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];
for(hero of heroes){
    console.log(hero);
}
const userName="Pushpendra";
for(char of userName){
    console.log(char);//Prints each charcater
}



//For Each loop
//For each loop is used to iterate over arrays and apply callback function on each element of the array.
const arr=[1,2,3,4,5];
arr.forEach(function (value,index){
    console.log(value);
})

//We can also use the arrow function in our case
arr.forEach((value,index,[])=>{
    console.log(`Value at ${index}th index is ${value}`);
})


const temp=[1,2,3,4,5];
let func=(value,index)=> console.log(`Value at ${index}th index is ${value}`);
temp.forEach(func);


//For in loop
//for in loop is used to iterater over the objects in js 

const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
};

for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

/*
Summary :-
forOf loop is used to iterate over the arrays,strings ,map and set in js 
forin loop are specifically designed to iterate over the object in js which is not an itarable as it do not have symbol.iterator funcion in it.
Object can be made itareble by addding an funciton to  it 
forEach loop is also specifically desinged for arrays
for in loop can also used to iterate over arrays here keys are 0 ,1 , 2 means index of the array
*/


const languages = [
    { languageName: 'JavaScript', extension: 'js' },
    { languageName: 'Python', extension: 'py' },
    { languageName: 'C++', extension: 'cpp' },
    { languageName: 'Java', extension: 'java' },
    { languageName: 'Ruby', extension: 'rb' }
];

languages.forEach((obj)=>{
    console.log(`${obj['languageName']}: ${obj['extension']}`);
})