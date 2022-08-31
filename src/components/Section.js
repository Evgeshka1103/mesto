export default class Section {
    constructor({ items, renderer }, containerSelector){
      this._initialCards = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    setItem(placeElement) {
      this._container.prepend(placeElement);
    }
  

    renderItems() {
    this._initialCards.forEach(item => {
    this.setItem(this._renderer(item));
    });
  }
}