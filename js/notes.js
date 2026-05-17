const notesArea = document.getElementById("notesArea");
notesArea.value = localStorage.getItem("notes") || "";
notesArea.addEventListener("keyup",()=>{
    localStorage.setItem("notes",notesArea.value);
});