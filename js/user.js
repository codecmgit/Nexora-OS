const user =
localStorage.getItem("username");
document.getElementById("userDisplay")
.innerText = user || "Guest";