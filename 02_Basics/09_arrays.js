// Array of Marvel heroes
const marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];
console.log(marvelHeroes);
// Array of DC heroes
const dcHeroes = ['Superman', 'Batman', 'Wonder Woman', 'The Flash', 'Aquaman'];
console.log(dcHeroes);

//marvelHeroes.push(dcHeroes);
//console.log(marvelHeroes);
//The push methode adds the array as an element in the array and return the length of the array while updating the orignal array.

//acces the dc heros array from the marvel heroes array
//console.log(marvelHeroes[5][0]);//Bad and old way of practicing 


//Concat operation 
const superHeroes=marvelHeroes.concat(dcHeroes);
console.log(superHeroes);
//Concat methtod is used to join the two arraya and return the whole new joined array.


//Spread operator
const allHeroes=[...marvelHeroes, ...dcHeroes];
console.log(allHeroes);
//Spread operator is used to spread the elements of the array and join them with the other array.


//Flatting of the array 
let nums=[1,2,3,[4,5,6,[7,8,9]]];
const numsFlat1=nums.flat(1);//Flatten the array by 1 level
const numsFlat2=nums.flat(2);//FLatten the array by 2 level
console.log(numsFlat1);
console.log(numsFlat2);
//Flat method is used to flatten the array by the defined level.
// We can use Infinity parameter by default to flatten the array to the last level.
//let flatArray=nums.flat(Infinity);

