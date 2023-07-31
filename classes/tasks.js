export default class FullTask {
    constructor(n, d, e, c) {
        this.taskName = n;
        this.taskDate = d;
        this.taskDescription = e;
        this.taskComplete = c;
    }
    format() {
        return `${this.taskDescription} | Complete by ${this.taskDate}`;
    }
}
