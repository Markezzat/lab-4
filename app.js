let tasks = [];

let input = document.getElementById("taskInput");
let task = document.getElementById("taskList");

function addTask() {
    let inputValue = input.value;

    if (inputValue !== "") {
        tasks.push(inputValue);
        input.value = "";
        render();
    }
}
function render(){
    task.innerHTML="";

    for(let i =0 ;i < tasks.length;i++){

        let p = document.createElement("p");
        p.textContent=tasks[i];
        task.appendChild(p);
        
    }
}w