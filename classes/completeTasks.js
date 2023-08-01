export default class CompleteTask {
    constructor(n, d, e, c, z) {
        this.taskName = n;
        this.taskDate = d;
        this.taskDescription = e;
        this.taskComplete = c;
        this.dayDif = z;
    }
    format() {
        return `${this.taskName} is completed!`;
    }
}
