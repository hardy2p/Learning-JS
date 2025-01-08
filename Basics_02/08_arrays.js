//Declaration of an array
const arr=[1,2,3,4,5];//Normal way
const arr1= new Array("Jaipur","Delhi","Mumbai","Banglore");//With help of constructor

//console.log(arr);

//Array is hetrgenous in nature in js .
const newArray=[1,2,"Pushpendra", true,undefined,null,{"name":"Pushpendra", "age":23}];
for( i=0;i<newArray.length;i++){
    //console.log(newArray[i]);
}

//Array is an object in js
//console.log(typeof newArray);
//Arrays are dynamic in nature in js means elements can be added or removed from the array in runtime.
//When ever an array is passed to some fucntion or any method is applied to it a refrence of the array is passed to the function or method.
const age=[12,13,14,15,16,17,18,19,20,21,22,23,24,25];
age[0]=45;
age.push(78);
//console.log(age);
//We can change the const data in the array because the const here is pointieng to the refrene in the array and it make sure its refrewnce does not change while the elements inside it can be changed

//METHODS
const superHero=["Shaktiman", "SuperMan", "SpiderMan", "BatMan"];
superHero.push("IronMan");//Adds the element at the end of the array and return the length of the array.
//console.log(superHero);

superHero.pop();//Remove an elements from the end of the array and return the removed element from the array.
//console.log(superHero);

superHero.unshift("Gangadhar");//Adds the element at the start of the array and return the length of the array.
//console.log(superHero);

superHero.shift();//Remove an elements from the start of the array and return the removed element from the array.
//console.log(superHero);

//console.log(superHero.indexOf("SuperMan"));//Return the index of super main in the array. -1 if element is not in the array
//console.log(superHero.includes("Batman"));//Return true and false value based upon the presence of the element in the array.
//console.log(superHero.find((hero)=>hero==="SuperMan"));//Return 


//Convert array into a string
let stringHero=superHero.join(" ");//Joins the elements of the array with the passed parameter of the array to form an string .
//console.log(stringHero);
let newAge= age.join();
//console.log(newAge);
//console.log(typeof newAge);
//.join method is used to conveet the array into a single string where elemnets are seprated by the passed parameter of the join method is no parameter is passed then it is seprated by comma.


//Slice and spilce method :-
//Slice method is used to extract a part of the array and return the extracted part of the array.
//Splice method is used to remove the part of the array and return the removed part of the array.

let num=[0,1,2,3,4,5,6,7,8,9];


//slice method
//SLice method is used to extract a part of the array and return it without hampering the original array.
let numSliced=num.slice(2,5);//2 included 5 exclueded
console.log("Original array after slicing ",num);
console.log("Sliced array ",numSliced);

//splice method
//Splice also used to extract the defined part of the array and retuturn the extracted path but it also changes the orignal array and removes those elements from that array to .
let numSpliced=num.splice(2,5);//2 include and 5 also included
console.log("Original array after spilicing",num);
console.log("Spliced array ",numSpliced);



//The major difference in splice and slice are :-
//In slice syntax the 2nd index is excluded while in slice it is included 
//The 2nd major difference is that slice do not hamper the orignal array while splice does hamper with it.

