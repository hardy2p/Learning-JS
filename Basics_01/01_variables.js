const accountID = 14575;
const accountName = "Pushpendra Singh";
let city ="Jaipur";
var branch="Sitapura";
accountType="Savings";
let x;


//accountID=45; const can not be changed
//do not use var as it is blocked scope so it would create a 
//confusion and would lead to inconsistency



console.log(accountID);
console.table([accountID,accountName,city,branch,accountType])
console.log(x);//undefined
x=5;
console.log(x);

