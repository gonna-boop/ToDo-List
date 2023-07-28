export default class FullTask {
    taskName: string;
    taskDate: Date;
    taskDescription: string;
  
    constructor(n: string, d: Date, e: string){
      this.taskName = n;
      this.taskDate = d;
      this.taskDescription = e;
    }
  
    format() {
      return `${this.taskName} should be completed by ${this.taskDate}: ${this.taskDescription}`;
    } 
  }
