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
      const newColor = colors[randomIndex];
      document.body.style.backgroundColor = newColor;
      
      // Ensure text color is different from background color
      document.body.style.color = newColor === 'yellow' ? 'black' : 'white';
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
  