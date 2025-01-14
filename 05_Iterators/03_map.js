const mp = new Map([
    ['a', 1],
    ['b', 2]
]);

console.log(`First element of map ${mp.get('a')}`);
mp.set('c', 3);

console.log(`Size of map is ${mp.size}`);
for (const [key, value] of mp) {
    console.log(`${key}: ${value}`);
}

mp.delete('b');
// for(const [key,val] of mp){
//     console.log(`${key}: ${val}`)
// }

mp.forEach((value,key)=>{
    console.log(`${key}: ${value}`);
})
/*
Summary:-
1.Map is used to store the key value pairs such as obj.
2.Function of map are:
    mp.set([key,value]);
    mp.get(key);
    mp.size;
    mp.delete(key)
3.Map can be decalre and intialized using the constructor 
4.For of and for each loop can be used to iterate over a map
5.Map can be seen as 2d array with size n*2.
6.The main differce in object and map is that map is iterable but object isnt.
7.Map has better performace
8.Object stores keys in random order while map does't
9.Objct can only be iterated with the help of for in loop
10.Object keys can only be string or symbol while map keys can be anything from a primitve datatype to an object.
*/


