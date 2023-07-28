import FullTask from './classes/tasks.js';
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
document.getElementById("addBtn").addEventListener("click", addTask);
