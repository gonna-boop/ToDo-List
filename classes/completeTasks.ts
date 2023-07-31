import  {hasFormatter} from '../interfaces/hasformatter.js'

export default class CompleteTask implements hasFormatter{
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
