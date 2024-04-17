const timer=document.querySelector(".timer");
const stop=document.querySelector(".fa-stop");
const play=document.querySelector(".fa-play");
const reset=document.querySelector(".fa-rotate-left");

let [hours,minutes,seconds]=[0,0,0];
let time=null;

stop.addEventListener("click",()=>{
    clearInterval(time);
});

function stopWatch(){
    seconds++;
    if(seconds>59){
        seconds=0;
        minutes++;
        if(minutes>59){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;

    timer.innerHTML=h+":"+m+":"+s;
}

play.addEventListener("click",()=>{
    if(time!==null){
        clearInterval(time);
    }
    time=setInterval(stopWatch,1000);
});

reset.addEventListener("click",()=>{
    clearInterval(time);
    [hours,minutes,seconds]=[0,0,0];
    timer.innerHTML="00:00:00";
});