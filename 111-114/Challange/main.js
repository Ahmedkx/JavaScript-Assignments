let inputTask = document.querySelector(".add input")
let addTask = document.querySelector(".add button")
let tasksList = document.querySelector(".tasks")
let arrayOfTasks = [];

function loadTasks() {
    if(window.localStorage.getItem("Tasks")){
        arrayOfTasks = JSON.parse(window.localStorage.getItem("Tasks"))
        for(let i = 0; i < arrayOfTasks.length; i++){
            createTask(arrayOfTasks[i].title,arrayOfTasks[i].id)
        }
    }
}
loadTasks()

function createTask(taskText,taskid) {
    let taskDiv = document.createElement("div")
    taskDiv.classList.add("task")
    taskDiv.setAttribute("task-Id",taskid)
    taskDiv.innerText = taskText
    taskDiv.setAttribute("id","task")
    let taskDeleteButton = document.createElement("button")
    taskDeleteButton.innerText = "Delete"
    taskDeleteButton.setAttribute("task-Id",taskid)
    taskDeleteButton.classList.add("delete")
    taskDiv.appendChild(taskDeleteButton)
    tasksList.appendChild(taskDiv)
}

function addTaskToTheArray(taskname) {
    let dateId = Date.now();
    arrayOfTasks.push({id:dateId ,title: taskname,status: false})
    window.localStorage.setItem("Tasks",JSON.stringify(arrayOfTasks))
    createTask(inputTask.value,dateId)
}

addTask.onclick = function () {
    if(inputTask.value !== ""){
    addTaskToTheArray(inputTask.value)
    inputTask.value = ""
}}

document.addEventListener("click",function (e) {
    if (e.target.className === "delete"){
        let task = arrayOfTasks.filter(function (ele){
            return ele.id != e.target.parentElement.getAttribute("task-id")
        })
        arrayOfTasks = task
        window.localStorage.setItem("Tasks",JSON.stringify(arrayOfTasks))
        tasksList.innerHTML = ""
        loadTasks()
    }
    if(e.target.getAttribute("id") == "task"){
        e.target.classList.toggle("deactivate")
    }
})