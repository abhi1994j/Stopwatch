let timer = document.getElementById('stopwatch-display');
// console.log(timer);
let start = document.getElementById('start');
let Stop = document.getElementById('stop');
let reset = document.getElementById('reset');
console.log(start , Stop , reset);

let miliSec = 0 ;
let sec = 0;
let min = 0 ;
let hour = 0 ;
let timerId = null;

start.addEventListener('click', ()=>{
    console.log("heelo");
    if(timerId !== null){
        clearInterval(timerId);
    }
     timerId = setInterval(startTimer, 10);
    
});



Stop.addEventListener('click', ()=>{
    clearInterval(timerId);
})

reset.addEventListener('click' , ()=>{
    clearInterval(timerId);
    timer.textContent = '00:00:00:00';
    miliSec = sec = min = hour = 0;
})
function startTimer(){
    miliSec++;
    if(miliSec > 100){
        sec++;
        miliSec = 0;
        if(sec > 60){
            min++;
            sec = 0;
            if(min > 60){
                hour++;
                min = 0;
            }
        }
    }  
    let msecString = miliSec >= 10 ? miliSec : `0${miliSec}`;
    let secString = sec >= 10 ? sec : `0${sec}`;
    let minString = min >= 10 ? min : `0${min}`;
    let hourString = hour >= 10 ? hour : `0${hour}`;
    timer.textContent = `${hourString}:${minString}:${secString}:${msecString}`;
}