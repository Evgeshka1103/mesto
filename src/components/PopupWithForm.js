import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit){
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
        /*this._handleFormSubmit = document.querySelector(handleFormSubmit);*/
    this._form = this._popupItem.querySelector('.popup__form');
  };

  _getInputValues(){
    this._inputsValues = {};
    this._inputList = this._form.querySelectorAll('input');

    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });

    return this._inputsValues;
  }

  setEventListeners(){
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const data = this._getInputValues(); //// Перенесли внутрь события, т.к. ты добавляешь слушатель события и говоришь:
      this._handleFormSubmit(data); //// "при событии сохранения на форме - отмени перезагрузку страницы и сделай вот это."
    });
  }

  close(){
    super.close();
    this._form.reset();
  }
}