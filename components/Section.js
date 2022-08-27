export default class Section{
    constructor({items, renderer}, containerSelector){
        this._initialCards = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(){
        this._initialCards.array.forEach(item => {
            this._renderer(item.name, item.link);
        });
    }

    setItem(placeElement){
        this._container.append(placeElement);
    }
}