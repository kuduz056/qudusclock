setInterval(start,1000)
const x=document.querySelector("[data-hour-hand]")

const y=document.querySelector("[data-minute-hand]")
const z=document.querySelector("[data-second-hand]")
function start(){
    const now=new Date();
    const seconds=now.getSeconds()/60
    const minutes=(seconds + now.getMinutes())/60
    const minute=(seconds + now.getMinutes())/60
    const hour= (minutes + now.getHours())/12
     setClock(x,hour)
     setClock(z,seconds)
     setClock(y,minute)
     
}
function setClock(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360);
}
start();