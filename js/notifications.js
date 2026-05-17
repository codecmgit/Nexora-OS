function showNotification(message){
    const div = document.createElement("div");
    div.classList.add("notification");
    div.innerText = message;
    document.body.appendChild(div);
    setTimeout(()=>{
        div.remove();
    },2000);
}