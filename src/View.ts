import type { Card, Content } from './type/types';
class View {
    constructor(cardData: Card) {
        console.log(cardData);

        let createImg: HTMLImageElement;
        let createDiv: HTMLDivElement;

        const mainContainer = document.createElement('main');
        mainContainer.id="parentContainer";
        document.body.appendChild(mainContainer);

        cardData.content.forEach((elem:Content) => {
            createDiv = document.createElement('div');
            createDiv.className = 'card-content';
        
            createImg = document.createElement('img');
            createImg.src = `../assets/images/${elem.img}`;
            createImg.alt = elem.img || 'card image';
        
            createDiv.appendChild(createImg);
            mainContainer.appendChild(createDiv);
        })
    }
}

export default View;