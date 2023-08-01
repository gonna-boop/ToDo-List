export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(task) {
        console.log(task);
        const divOne = document.createElement('div');
        const divTwo = document.createElement('div');
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = task.taskName;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = task.format();
        li.append(p);
        divOne.append(li);
        const newDiv = document.createElement('div');
        const toggle = `<div class="task-2"><label class="switch"><input type="checkbox"><span class="slider round" id="slider"></span></label></div>`;
        newDiv.innerHTML += toggle;
        divTwo.append(newDiv);
        divOne.append(newDiv);
        divOne.classList.add('fullTask');
        divOne.classList.add('mb-3');
        this.container.append(divOne, divTwo);
    }
}
