import  FullTask from './classes/tasks.js';
import  CompleteTask from './classes/completeTasks.js';
import  { hasFormatter } from './interfaces/hasformatter.js'

// let docOne: hasFormatter;
// let docTwo: hasFormatter;

// docOne = new FullTask('Test Task', new Date('2023-08-01'), 'Test Task Description');
// docTwo = new CompleteTask('Test Task 2', new Date('2023-08-02'), 'Test Task 2 Description');

// let tasks: hasFormatter[] = [];
// tasks.push(docOne);
// tasks.push(docTwo);

// console.log(tasks);

function addTask() {
  let taskComplete = false;
  let taskName = (<HTMLInputElement>document.getElementById('inputTask')).value;
  let taskDate = new Date((<HTMLInputElement>document.getElementById('dueDate')).value);
  let taskDescription = (<HTMLInputElement>document.getElementById('inputDescription')).value;
  const newTask = new FullTask(taskName, taskDate, taskDescription);
  // tasks.push(newTask);

  // tasks.forEach(task => {
  // console.log(task.format());
};
 

document.getElementById("addBtn")!.addEventListener("click", addTask);