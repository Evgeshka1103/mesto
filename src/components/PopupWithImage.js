import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
   constructor(popupSelector) {
      super(popupSelector);

      this._popupImage = this._popupItem.querySelector('.popup__image');
      this._popupCaption = this._popupItem.querySelector('.popup__caption');
   }

   open(image, title) {
      this._popupCaption.textContent = title;
      this._popupImage.alt = title;
      this._popupImage.src = image;

      super.open();
   }

}