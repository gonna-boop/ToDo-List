export default class CompleteTask {
    constructor(n, d, e, c) {
        this.taskName = n;
        this.taskDate = d;
        this.taskDescription = e;
        this.taskComplete = c;
    }
    format() {
        return `${this.taskName} is completed!`;
    }
}
