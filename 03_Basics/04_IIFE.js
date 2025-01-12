//IIFE:- Imediatly invoked function expression 
//These are implemented so that code written in js doest get polluted by global varibles
//They are of two types
//Named iffe and unnamed iife

//Named IIFE

(function func(){
    console.log(`Named iffe called`);
})();

//Unnamed iffe are implementd with the help of arrow funcitons
//Also provided the info about argument passing and default parameter
((userName="Hitesh")=>{
    console.log(`Unamed iffe with argument ${userName}`);
})('Pushpendra');