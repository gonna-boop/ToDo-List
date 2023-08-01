export default class FullTask {
    constructor(n, d, e, c, z) {
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
