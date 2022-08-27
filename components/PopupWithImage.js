import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupImage = this._popupSelector.querySelector('.popup_image');
        this._popupCaption = this._popupSelector.querySelector('.popup_caption');
    }

    open(name, link){
        this._popupCaption.textContent = name;
        this._popupImage.src = link;
        this._popupImage.alt = name;
        super.open();
    }
}