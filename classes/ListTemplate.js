export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        //maybe change this to a literal where different elements are sent from 
        //an array
        //each item in the array would be looped through and pasted,
        //based on which page/array is selected (this week, month, etc.)
        //if you select a new array, it resets the page and recreats the content based 
        //on THAT array
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
