function updateClock(){
    const now = new Date();
    document.getElementById("clock").innerText =now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock,1000);