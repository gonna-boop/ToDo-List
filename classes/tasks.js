export default class FullTask {
    constructor(n, d, e) {
        this.taskName = n;
        this.taskDate = d;
        this.taskDescription = e;
    }
    format() {
        return `${this.taskName} should be completed by ${this.taskDate}: ${this.taskDescription}`;
    }
}
