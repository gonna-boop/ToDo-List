import  {hasFormatter} from '../interfaces/hasformatter.js'

export default class FullTask implements hasFormatter{
    taskName: string;
    taskDate: string;
    taskDescription: string;
    taskComplete: boolean;
    dayDif: number;
  
    constructor(n: string, d: string, e: string, c: boolean, z: number){
      this.taskName = n;
      this.taskDate = d;
      this.taskDescription = e;
      this.taskComplete = c;
      this.dayDif = z;
    }
  
    format() {
      return `${this.taskDescription} | Complete by ${this.taskDate}`;
    } 
  }
