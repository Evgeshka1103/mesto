import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');

        //поля формы
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        //пустой объект
        this._formValues = {};
        //поля объекта
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();

            this._submitForm(this._getInputValues());
        });
    }
    close(){
        super.close();
        this._form.reset();
    }
}