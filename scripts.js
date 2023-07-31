"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tasks_js_1 = require("./classes/tasks.js");
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new FullTask('Test Task', new Date('2023-08-01'), 'Test Task Description');
// docTwo = new CompleteTask('Test Task 2', new Date('2023-08-02'), 'Test Task 2 Description');
// let tasks: hasFormatter[] = [];
// tasks.push(docOne);
// tasks.push(docTwo);
// console.log(tasks);
function addTask() {
    var taskComplete = false;
    var taskName = document.getElementById('inputTask').value;
    var taskDate = new Date(document.getElementById('dueDate').value);
    var taskDescription = document.getElementById('inputDescription').value;
    var newTask = new tasks_js_1.default(taskName, taskDate, taskDescription);
    // tasks.push(newTask);
    // tasks.forEach(task => {
    // console.log(task.format());
}
;
document.getElementById("addBtn").addEventListener("click", addTask);
