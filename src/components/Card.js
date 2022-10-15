import { data } from "autoprefixer";

export default class Card {

   constructor({ data, handleCardClick }, templateSelector, handleCardDelete, handleLikeClick, userId) {

      this._title = data.name;
      this._image = data.link;
      this._likes = data.likes;
      this._likeCount = data.likes.length;
      this._cardId = data._id;
      this._cardOwner = data.owner._id;
      this._userId = userId;
      this._handleCardClick = handleCardClick;
      this._templateSelector = templateSelector;
      this._handleLikeClick = handleLikeClick;
      this._handleCardDelete = handleCardDelete;
     
   }

   _getTemplate() {
      const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__card').cloneNode(true);
      //возвращаем DOM-элемент карточки
      return cardElement;
   }

   isLiked() {
      return this._likes.some((element) => element._id === this._userId);
      }

   setLikesNumber(likes) {

      this._likes = likes;
      this._toggleLike();
   }

   _toggleLike() {
      this._numberLike.textContent = this._likeCount;
      const isLiked = this.isLiked();
      
      if (isLiked) {
         this._likeButton.classList.add('elements__like_active');
         
      } else {
         this._likeButton.classList.remove('elements__like_active');
         
      }
   }

   generateCard() {
      this._element = this._getTemplate(); // получаем доступ к элементу  
      this._cardImage = this._element.querySelector('.elements__mask-group');
      this._cardTitle = this._element.querySelector('.elements__sight');
      this._likeButton = this._element.querySelector('.elements__like');
      this._numberLike = this._element.querySelector('.elements__number-like');
      this._deleteButton = this._element.querySelector('.elements__delete');

      this._cardImage.src = this._image;
      this._cardTitle.textContent = this._title;
      this._cardImage.alt = this._title;
      this._numberLike.textContent = this._likeCount;

      this._checkOwner();

      this._setEventListeners();

      this._toggleLike();

      return this._element;
   }

   _setEventListeners() {
      //открываем попап 
      this._cardImage.addEventListener('click', () => {
         this._handleCardClick(this._image, this._title)
      });

      //удаляем  
      this._deleteButton.addEventListener('click', () => {
         this._handleCardDelete(this._cardId, this)
      });

      //лайкаем  
      this._likeButton.addEventListener('click', () => {
         this._handleLikeClick(this, this._cardId, this._likes)
      });
   }

   _checkOwner() {
      if (this._cardOwner !== this._userId) {
         this._deleteButton.remove();
      }
   };

   handleDelete() {
      this._element.remove();
      this._element = null;
   }

}