let time = 1500;
let interval;
const timerElement = document.getElementById("timer");
function updateTimer(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0"+seconds : seconds;
    timerElement.innerText =`${minutes}:${seconds}`;
}
function startTimer(){
    clearInterval(interval);
    interval = setInterval(()=>{
        if(time > 0){
            time--;
            updateTimer();
        }
    },1000);
}
function resetTimer(){
    clearInterval(interval);
    time = 1500;
    updateTimer();
}
updateTimer();