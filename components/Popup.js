export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handlerEscClose = this._handlerEscClose.bind(this);
    }

    open () {
        this._popup.classList.add('popup__opened');
        document.addEventListener('keydown', this._handlerEscClose); 
    }

    close () {
        this._popup.classList.remove('popup__opened');
        document.removeEventListener('keydown', this._handlerEscClose);
    }

    _handlerEscClose(evt) {
        if (evt.key === 'Escape') { 
            this.close();
        } 
    }

    setEventListener() {
        this._popup.addEventListener('mousedown', (evt) => { 
            if (evt.target.classList.contains('popup__opened')) { 
                this.close();
            } else if (evt.target.classList.contains('popup__button-close')) { 
                this.close();
            } 
        });
    }
}