const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "cyan",
  "magenta",
];

const colorChager = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
};

let intervalId;

document.getElementById('start').addEventListener('click',()=>{
    if(!intervalId){
       intervalId= setInterval(colorChager,1000);
    }
})

document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId=null;
})
