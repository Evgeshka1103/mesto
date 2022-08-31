import { data } from "autoprefixer";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit){
    super(popupSelector);
    
    this._handleFormSubmit = handleFormSubmit;
    
    this._form = this._popupItem.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
   
  };

  _getInputValues(){
    this._inputsValues = {};
    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });

    return this._inputsValues;
  }

  setEventListeners(){
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const data = this._getInputValues(); 
      this._handleFormSubmit(data);
      
    });
  }

  close(){
    super.close();
    this._form.reset();
  }
}