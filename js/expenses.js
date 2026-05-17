const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses(){
    expenseList.innerHTML = "";
        if(expenses.length === 0){
        expenseList.innerHTML =
        "<p>No expenses added yet.</p>";
        }
    let total = 0;
    expenses.forEach((expense,index)=>{
        total += Number(expense.amount);
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
            ${expense.name}
            <br>
            <small>${expense.category}</small>
            </div>
            <div>
            ₹${expense.amount}
            <button
            class="delete-btn"
            onclick="deleteExpense(${index})">
            Delete
            </button>
            </div>
        `;
        expenseList.appendChild(li);
    });
    totalExpense.innerText = total;
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}
function addExpense(){
    const name = expenseName.value;
    const amount = expenseAmount.value;
    const category =
    document.getElementById("expenseCategory").value;
    if(name === "" || amount === "") return;
    expenses.push({
        name,
        amount,
        category
    });
    expenseName.value = "";
    expenseAmount.value = "";
    renderExpenses();
    showNotification("Expense Added");
}
function deleteExpense(index){
    expenses.splice(index,1);
    renderExpenses();
}
renderExpenses();
expenseAmount.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        addExpense();
    }
});