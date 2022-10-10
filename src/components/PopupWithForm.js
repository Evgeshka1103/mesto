//import { data } from "autoprefixer"; 
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupItem.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');

        this._popupButton = this._form.querySelector('.popup__button');
        this._popupButtonFormLoading = this._popupButton.textContent;
    };

    _getInputValues() {
        this._inputsValues = {};
        this._inputList.forEach(input => {
            this._inputsValues[input.name] = input.value;
        });

        return this._inputsValues;
    }



    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderButtonLoading(isLoading) {
        if (isLoading) {
            this._popupButton.textContent = 'Сохранение...';
        } else {
            this._popupButton.textContent = this._popupButtonFormLoading;
        }
    }
}