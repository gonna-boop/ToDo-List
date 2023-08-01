import FullTask from './classes/tasks.js';
import CompleteTask from './classes/completeTasks.js';
import { ListTemplate } from './classes/ListTemplate.js';
let taskComplete;
let taskName;
let taskDate;
let taskDescription;
let allTasks = [];
let thisWeek = [];
let thisMonth = [];
let today = [];
let todayDate = new Date();
function addTask() {
    taskName = document.getElementById('inputTask').value;
    taskDate = new Date(document.getElementById('dueDate').value);
    let month = taskDate.getUTCMonth() + 1;
    let day = taskDate.getUTCDate();
    let year = taskDate.getUTCFullYear();
    let newDate = month + '/' + day + '/' + year;
    taskDescription = document.getElementById('inputDescription').value;
    taskComplete = 'false';
    //list template instance 
    const ul = document.getElementById('task-list');
    const list = new ListTemplate(ul);
    let task;
    if (taskComplete === 'false') {
        task = new FullTask(taskName, newDate, taskDescription, taskComplete);
    }
    else {
        task = new CompleteTask(taskName, newDate, taskDescription, taskComplete);
    }
    allTasks.push(task);
    // list.render(task, taskName, 'end'); 
    let timeDif = taskDate.getTime() - todayDate.getTime();
    let dayDif = timeDif / (1000 * 3600 * 24);
    if (dayDif <= 1) {
        today.push(task);
        thisWeek.push(task);
        thisMonth.push(task);
        list.render(task, taskName, 'start');
    }
    else if (dayDif < 8 && dayDif > 1) {
        thisWeek.push(task);
        thisMonth.push(task);
        list.render(task, taskName, 'end');
    }
    else if (dayDif >= 8 && dayDif <= 31) {
        thisMonth.push(task);
        list.render(task, taskName, 'end');
    }
}
;
document.getElementById("addBtn").addEventListener("click", addTask);
