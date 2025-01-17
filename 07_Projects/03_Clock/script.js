const clock = document.querySelector('#clock');
function updateClock(){
  const date=new Date();
  clock.innerHTML=`${date.toLocaleTimeString()}`;
}
updateClock();
setInterval(updateClock(),1000);
