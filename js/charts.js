const ctx =
document.getElementById("myChart");
if(ctx){
    const savedTasks =
    JSON.parse(localStorage.getItem("tasks")) || [];
    const savedExpenses =
    JSON.parse(localStorage.getItem("expenses")) || [];
    const completedTasks =
    savedTasks.filter(task => task.completed).length;
    const pendingTasks =
    savedTasks.length - completedTasks;
    const totalExpenses =
    savedExpenses.reduce(
        (sum,expense)=>
        sum + Number(expense.amount),
        0
    );
    new Chart(ctx,{
        type:'bar',
        data:{
            labels:[
                'Completed Tasks',
                'Pending Tasks',
                'Expenses'
            ],
            datasets:[{
                label:'Analytics',
                data:[
                    completedTasks,
                    pendingTasks,
                    totalExpenses
                ],
                borderWidth:1
            }]
        }
    });
}