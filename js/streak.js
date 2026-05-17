const today =
new Date().toDateString();
const lastVisit =
localStorage.getItem("lastVisit");
let streak =
Number(localStorage.getItem("streak")) || 0;
if(lastVisit !== today){
    streak++;
    localStorage.setItem("streak",streak);
    localStorage.setItem("lastVisit",today);
}
document.getElementById("streak")
.innerText = streak + " Days";