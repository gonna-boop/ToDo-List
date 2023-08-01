var _a;
import FullTask from './classes/tasks.js';
import CompleteTask from './classes/completeTasks.js';
import { ListTemplate } from './classes/ListTemplate.js';
let taskComplete;
let taskName;
let taskDate;
let taskDescription;
let allTasks = [];
// let thisWeek: Array<any> = [];
// let thisMonth: Array<any> = [];
// let today: Array<any> = [];
//function to filter tasks based on date
//render function based on the filter 
let todayDate = new Date();
const ul = document.getElementById('task-list');
const list = new ListTemplate(ul);
function addTask() {
    taskName = document.getElementById('inputTask').value;
    taskDate = new Date(document.getElementById('dueDate').value);
    let month = taskDate.getUTCMonth() + 1;
    let day = taskDate.getUTCDate();
    let year = taskDate.getUTCFullYear();
    let newDate = month + '/' + day + '/' + year;
    taskDescription = document.getElementById('inputDescription').value;
    taskComplete = false;
    let timeDif = taskDate.getTime() - todayDate.getTime();
    let dayDif = timeDif / (1000 * 3600 * 24);
    //list template instance 
    const ul = document.getElementById('task-list');
    const list = new ListTemplate(ul);
    let task;
    if (taskComplete === false) {
        task = new FullTask(taskName, newDate, taskDescription, taskComplete, dayDif);
    }
    else {
        task = new CompleteTask(taskName, newDate, taskDescription, taskComplete, dayDif);
    }
    allTasks.push(task);
    // list.render(task, taskName, 'end'); 
    if (dayDif <= 1) {
        // today.push(task);
        // thisWeek.push(task);
        // thisMonth.push(task);
        // console.log(task);
        list.render(task);
    }
    else if (dayDif < 8 && dayDif > 1) {
        // thisWeek.push(task);
        // thisMonth.push(task);
        list.render(task);
    }
    else if (dayDif >= 8 && dayDif <= 31) {
        // thisMonth.push(task)
        list.render(task);
    }
    else {
        list.render(task);
    }
}
;
document.getElementById("addBtn").addEventListener("click", addTask);
function arraySelector() {
    console.log('test');
}
let opt1 = document.getElementById("array1").addEventListener("click", () => {
    if (!ul)
        return;
    ul.innerHTML = "";
    const list = new ListTemplate(ul);
    const dayTasks = allTasks.filter(task => task.dayDif <= Infinity);
    for (const t of dayTasks) {
        list.render(t);
    }
});
let opt2 = document.getElementById("array2").addEventListener("click", () => {
    if (!ul)
        return;
    ul.innerHTML = "";
    const list = new ListTemplate(ul);
    const dayTasks = allTasks.filter(task => task.dayDif <= 1);
    for (const t of dayTasks) {
        list.render(t);
    }
});
let opt3 = document.getElementById("array3").addEventListener("click", () => {
    if (!ul)
        return;
    ul.innerHTML = "";
    const list = new ListTemplate(ul);
    const dayTasks = allTasks.filter(task => task.dayDif <= 8);
    for (const t of dayTasks) {
        list.render(t);
    }
});
let opt4 = document.getElementById("array4").addEventListener("click", () => {
    if (!ul)
        return;
    ul.innerHTML = "";
    const list = new ListTemplate(ul);
    const dayTasks = allTasks.filter(task => task.dayDif <= 31);
    for (const t of dayTasks) {
        list.render(t);
    }
});
function completedTask() {
    console.log('test');
}
(_a = document.getElementById("task-2")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", completedTask);
