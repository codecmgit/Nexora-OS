function login(){
    const username =
    document.getElementById("username").value;
    const password =
    document.getElementById("password").value;
    if(username === "" || password === ""){
        alert("Please enter credentials");
        return;
    }
    localStorage.setItem("username",username);
    window.location.href =
    "dashboard.html";
}
function logout(){
    window.location.href =
    "index.html";

}