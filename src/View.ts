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
            document.body.appendChild(createDiv);

            createImg = document.createElement('img');
            createImg.src = `../assets/images/${elem.img}`;
            document.body.appendChild(createImg);
        })
    }
}

export default View;