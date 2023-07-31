export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const divOne = document.createElement('div');
        const divTwo = document.createElement('div');
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        divOne.append(li);
        const newDiv = document.createElement('div');
        const toggle = `<div class="task-2"><label class="switch"><input type="checkbox"><span class="slider round"></span></label></div>`;
        newDiv.innerHTML += toggle;
        divTwo.append(newDiv);
        divOne.append(newDiv);
        divOne.classList.add('fullTask');
        divOne.classList.add('mb-3');
        if (pos === 'start') {
            this.container.prepend(divOne, divTwo);
        }
        else {
            this.container.append(divOne, divTwo);
        }
    }
}
