export default class Section {
    constructor({ items, renderer }, containerSelector){
      this._initialCards = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    renderItems() {
      this._initialCards.forEach(item => {
        this._renderer(item.name, item.link);
        this._container.prepend(this._renderer(item));
      });
    }
  
    setItem(placeElement) {
      this._container.prepend(placeElement);
    }
  }
  