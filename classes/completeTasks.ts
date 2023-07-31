import  {hasFormatter} from '../interfaces/hasformatter.js'

export default class CompleteTask implements hasFormatter{
    taskName: string;
    taskDate: string;
    taskDescription: string;
    taskComplete: string;
  
    constructor(n: string, d: string, e: string, c: string){
      this.taskName = n;
      this.taskDate = d;
      this.taskDescription = e;
      this.taskComplete = c;
    }
  
    format() {
      return `${this.taskName} is completed!`;
    } 
  }
