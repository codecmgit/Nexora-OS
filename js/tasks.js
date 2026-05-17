const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderTasks(){
    taskList.innerHTML = "";
     if(tasks.length === 0){
        taskList.innerHTML =
        "<p>No tasks added yet.</p>";
     }
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <input type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${index})">
                <span style="
                text-decoration:${task.completed ? "line-through" : "none"};
                ">
                ${task.text}
                </span>
            </div>
            <button class="delete-btn"
            onclick="deleteTask(${index})">
            Delete
            </button>
        `;
        taskList.appendChild(li);
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    const taskCounter = document.getElementById("taskCount");
    if(taskCounter){
    taskCounter.innerText = tasks.length;}
}
function addTask(){
    if(taskInput.value.trim() === "") return;
    tasks.push({
        text:taskInput.value,
        completed:false
    });
    taskInput.value = "";
    renderTasks();
    showNotification("Task Added");
}
function toggleTask(index){
    tasks[index].completed =
    !tasks[index].completed;
    renderTasks();
}
function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
    showNotification("Task Deleted");
}
renderTasks();
function searchTasks(){
    const value =
    document.getElementById("searchTask")
    .value
    .toLowerCase();
    const li =
    document.querySelectorAll("#taskList li");
    li.forEach(item=>{
        item.style.display =
        item.innerText.toLowerCase().includes(value)
        ? "flex"
        : "none";
    });
}
taskInput.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        addTask();
    }
});