function one(){
    const userName="Pushpendra";

    function two(){
        console.log(userName);
        const website=" youtube.com";
        console.log(website);
    }
    // console.log(website); This would give me an error
    two();
}
one();

//Differnce in functional scope and block scope
function temp(){
    {
        var a="Hello";
        let b="Pushpendra singh";
        console.log(b);
    }
    console.log(a);
    //console.log(b);//This would give me an error as let is an functional scope.
}

temp();



//Function expression in js 
//Function decalred as variable are called as function variable

const sum= function(...nums){
    let sum=0;
    for(num of nums){
        sum+=num;
    }
    return sum;
}

console.log(sum(1,2,3,4,5));


//Hoisting differce in traditional function decalration and function expression declaration
normal();
function normal(){
    console.log("Hello Normal function");
}
//expr();//This would create an error as function expression works similar to varible so it will create an refresece errroe or tempral dead zone
const expr=function(){
    console.log("Function Expression Function");
}