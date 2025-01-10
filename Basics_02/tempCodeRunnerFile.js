//Singelton objects are objects that are created only once and are shared by all the modules that require them.
// //In Node.js, module caching allows us to create a singleton object.
// //Singelton objects are always created using the class constructor.
// //The object decalred normally are known as object literal not the singelton objects.

// const studentData=new Object();

// studentData.id="20BCS4137";
// studentData.name="Pushpendra"; 
// studentData.isLoggedin=false;
// // console.log(studentData);


// //Nested Objects 

// const student={
//     id:"20BCS4137",
//     name:{
//         userFullName:{
//             firstName:"Pushpendra",
//             lastName:"Singh"
//         }
//     },
//     isLoggedin:false,
//     address:{
//         city:"Delhi",
//         state:"Delhi",
//         country:"India"
//     }
// }

// console.log(student.name.userFullName.firstName);


// //Addding objects together
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };

// const obj2 = {
//     keyA: "valueA",
//     keyB: "valueB"
// };

// const obj3={...obj1,...obj2};//Using spread operator we can add two objects just like in arraus 
// console.log(obj3);
// // Creating two new object literals and merging them
// const obj4 = {
//     keyX: "valueX",
//     keyY: "valueY"
// };

// const obj5 = {
//     keyM: "valueM",
//     keyN: "valueN"
// };

// const obj6 = Object.assign({},obj4,obj5);
// //All the obj4 and 5 are getting copied in {} object

// console.log(obj6);

