let inputTask = document.querySelector(".add input")
let addTask = document.querySelector(".add button")
let tasksList = document.querySelector(".tasks")

let arrayOfTasks = [];

function createTask(taskText) {
    let taskDiv = document.createElement("div")
    taskDiv.classList.add("task")
    let taskSpan = document.createElement("span")
    taskSpan.innerText = taskText
    taskDiv.appendChild(taskSpan)
    let taskDeleteButton = document.createElement("button")
    taskDeleteButton.innerText = "Delete"
    taskSpan.appendChild(taskDeleteButton)
    tasksList.appendChild(taskDiv)
}

function createLocalStorage(params) {
    
}

addTask.onclick = function () {
    if(inputTask.value !== ""){
    createTask(inputTask.value)
    inputTask.value = ""
}}