class FullTask {
  taskName: string;
  taskDate: Date;
  taskDescription: string;

  constructor(n: string, d: Date, e: string){
    this.taskName = n;
    this.taskDate = d;
    this.taskDescription = e;
  }

  format() {
    return `${this.taskName} should be completed by ${this.taskDate}: ${this.taskDescription}`
  }
}

const newTask = new FullTask('Test', new Date('2023-08-01'), 'Test');

let tasks: FullTask[] = [];

function addTask() {
  let taskName = (<HTMLInputElement>document.getElementById('inputTask')).value;
  let taskDate = new Date((<HTMLInputElement>document.getElementById('dueDate')).value);
  let taskDescription = (<HTMLInputElement>document.getElementById('inputDescription')).value;
  const newTask = new FullTask(taskName, taskDate, taskDescription);
  tasks.push(newTask);

  tasks.forEach(task => {
  console.log(task.format());
});
}

