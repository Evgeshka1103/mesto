/*//массив карточек
const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ]; */

  class Card {
    constructor(data, templateSelector, handlePreview) {
        this._title = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector;
        this._handlePreview = handlePreview;
    }
  
    _getTemplate() {
      const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__card').cloneNode(true);
      
      return cardElement;
    } 
  
    generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.elements__sight').textContent = this._title;
      this._cardImage = this._element.querySelector('.elements__mask-group');
      this._likeButton = this._element.querySelector('.elements__like');
      this._setEventListeners();
      this._cardImage.src = `${this._image}`;
      this._cardImage.alt = this._title;
       
      return this._element;
    }
  
  
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => {
        this._handlePreview(this._image, this._title) //открываем попап
      });
  
      //лайкаем
      this._likeButton.addEventListener('click', () => {
        this._handleLike() 
      });
  
      //удаляем
      this._element.querySelector('.elements__delete').addEventListener('click', () => {
        this._handleDelete() 
      });
    }
  
    _handleLike() {
      this._likeButton.classList.toggle('elements__like_active');
    }
  
    _handleDelete() {
      this._element.remove();
      this._element = null; 
    }
  }

  export default Card;