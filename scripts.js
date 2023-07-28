"use strict";
class FullTask {
    constructor(n, d, e) {
        this.taskName = n;
        this.taskDate = d;
        this.taskDescription = e;
    }
    format() {
        return `${this.taskName} should be completed by ${this.taskDate}: ${this.taskDescription}`;
    }
}
const newTask = new FullTask('Test', new Date('2023-08-01'), 'Test');
let tasks = [];
function addTask() {
    let taskName = document.getElementById('inputTask').value;
    let taskDate = new Date(document.getElementById('dueDate').value);
    let taskDescription = document.getElementById('inputDescription').value;
    const newTask = new FullTask(taskName, taskDate, taskDescription);
    tasks.push(newTask);
    tasks.forEach(task => {
        console.log(task.format());
    });
}
