const progress=document.querySelector("#progress");
const song=document.querySelector("#song")
const playPause=document.querySelector("#play-pause");

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}


playPause.addEventListener("click",()=>{
    if(playPause.classList.contains("fa-pause")){
        song.pause();
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
    }
    else{
        song.play();
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
    }
});

if(playPause.classList.contains("fa-play")){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}


progress.addEventListener("change",()=>{
    song.play();
    song.currentTime=progress.value;
    playPause.classList.add("fa-pause");
    playPause.classList.remove("fa-play");
})

song.addEventListener("ended",()=>{
    song.loop=true;
    progress.value=song.currentTime;
})

// song.addEventListener("ended",()=>{
//     playPause.classList.remove("fa-pause");
//     playPause.classList.add("fa-play");
// })