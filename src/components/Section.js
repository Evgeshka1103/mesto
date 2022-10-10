export default class Section {
   constructor({ renderer }, containerSelector) {
      //this._initialCards = items; 
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
   }

   setItem(placeElement) {
      this._container.prepend(placeElement);
   }

   renderItems(cards, userId) {
      cards.forEach(item => {
         this._renderer(item, userId);
      });
   }
}