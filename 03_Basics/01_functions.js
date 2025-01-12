function userName(Name) {
  console.log("Hello ", Name);
  console.log(`Hello ${Name}`);
}
userName("Pushpendra"); //Execuitng the function

console.log(userName); //This would give us an refrence to the function

function addition(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Please give valid input";
  }
}

const sum = addition(4, 4);
console.log(sum);
console.log(addition(null,"hello"));//Else block will execute



//Arrays with functions 
//Dealing with varArgs(varible arguments)

function calculateCartSum(...nums){
    let sum=0;
    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i];
    }
    return sum;
}

console.log(calculateCartSum(400, 200, 800));
console.log(calculateCartSum(78, 45));



//Variation 
function calc(val1, val2, ...nums){
    console.log(nums);
}

calc(41,55,78,87,65);


//Objects with functions

const user = {
    name: "Pushpendra",
    age: 25,
    email: "pushpendra@example.com"
};



function handelUser(obj){
    console.log(`Hello ${obj.name} your age is ${obj.age}`);
}

handelUser(user);