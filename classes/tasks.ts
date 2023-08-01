import  {hasFormatter} from '../interfaces/hasformatter.js'

export default class FullTask implements hasFormatter{
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
      return `${this.taskDescription} | Complete by ${this.taskDate}`;
    } 
  }
