export default class Popup {
    constructor(popupSelector){
        /*this._popupSelector = document.querySelector(popupSelector);*/
      this._popupItem = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }

    open(){
      this._popupItem.classList.add('popup__opened');
      document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
      this._popupItem.classList.remove('popup__opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt){
      if(evt.key === "Escape"){
        close();
      }
    }

    setEventListeners() {
      this._popupItem.addEventListener('mousedown', (evt) => { 
        if (evt.target.classList.contains('popup__opened')) { 
          this.close();
        } else if (evt.target.classList.contains('popup__button-close')) { 
          this.close();
        } 
    })
  }
}