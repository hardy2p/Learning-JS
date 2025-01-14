//for loop
console.log('For loop');
for(let i=1;i<=10;i++){
    console.log(i);
}
//While loop
console.log("While loop");
let i=1;
while(i<=10){
    console.log(i);
    i++;
}
console.log("Do while loop");
//Do while loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=10)

let heroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];

for(let i=0;i<heroes.length;i++){
    console.log(`The hero at ${i}th index is ${heroes[i]}`);
}