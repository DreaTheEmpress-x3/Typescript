import type { Card, Content } from './type/types';
import Particles from "./Particles"; 

new Particles();

class View {
    
    static rotationPos: number[] = [5, -5, 2, 1, -1, 3, -3];

    constructor(cardData: Card) {
        console.log(cardData);

        let createImg: HTMLImageElement;
        let createDiv: HTMLDivElement;

        const mainContainer = document.createElement('main');
        mainContainer.id = "parentContainer";
        document.body.appendChild(mainContainer);

        cardData.content.forEach((elem: Content) => {
            createDiv = document.createElement('div');
            createDiv.style.transform = `rotate(${this.randomRotation()}deg)`;
            createDiv.className = 'card-content';

            createImg = document.createElement('img');
            createImg.src = `../assets/images/${elem.img}`;
            createImg.alt = elem.img || 'card image';

            createDiv.appendChild(createImg);
            mainContainer.appendChild(createDiv);
        })
    }

    randomRotation(): number {
        return View.rotationPos[(Math.floor(Math.random() * View.rotationPos.length))];
    }
}

export default View;