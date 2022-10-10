import Popup from './Popup.js';
export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupItem.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardId, this._currentCard);
    })
  }

  open(cardId, card) {
    this._cardId = cardId;
    this._currentCard = card;
    super.open();
  }
}