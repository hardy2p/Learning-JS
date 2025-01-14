const books = [
    {
        title: "Brave New World",
        genre: "Dystopian",
        publish: 1932,
        edition: "1st"
    },
    {
        title: "Moby Dick",
        genre: "Adventure",
        publish: 1851,
        edition: "1st"
    },
    {
        title: "War and Peace",
        genre: "Historical",
        publish: 1869,
        edition: "1st"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publish: 1813,
        edition: "1st"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publish: 1937,
        edition: "1st"
    },
    {
        title: "Crime and Punishment",
        genre: "Psychological",
        publish: 1866,
        edition: "1st"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: 1949,
        edition: "1st"
    },
    {
        title: "The Call of the Wild",
        genre: "Adventure",
        publish: 1903,
        edition: "1st"
    },
    {
        title: "Les Misérables",
        genre: "Historical",
        publish: 1862,
        edition: "1st"
    },
    {
        title: "Wuthering Heights",
        genre: "Romance",
        publish: 1847,
        edition: "1st"
    }
];


let userBooks=books.filter((book)=>{
    return book.publish > 1900;
})
console.log(userBooks);


let romcom=books.filter((book)=> book.genre==="Romance");
console.log(romcom);

//We can use multiple conditions too
//books after 1900 and adventure to are
let temp=books.filter((book)=>{
    return book.genre==="Adventure" && book.publish>1900;
})
console.log(temp);




//Map method in js 
const nums=[1,2,3,4,5,6,7,8,9,10];

const newNums = nums.map((num)=>{
    return num=num*10;
})
console.log(newNums);

//Double maps 
const arr=nums.map((num)=> num=num*10).map((num)=> num=num+1);
console.log(arr);


//Reduce method in js 
let sum=nums.reduce((val,acc)=>{
    return acc=val+acc;
},0);
console.log(sum);