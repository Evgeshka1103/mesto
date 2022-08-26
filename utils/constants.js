//Кнопки открытия попапов 
export const profileEditButton = document.querySelector('.profile__edit-button'); //откр попап профиля 
export const buttonPlace = document.querySelector('.profile__button'); //откр попап карточки
//Кнопки попапа 
export const popupButtonCloseList = document.querySelectorAll('.popup__button-close'); //закрыть попап 
export const popupButton = document.querySelectorAll('.popup__button');//сохранить(создать)

//Попап 
export const popups = document.querySelectorAll('.popup');
export const popupProfile = document.querySelector('.popup_profile');  //профиль 
export const popupNewPlace = document.querySelector('.popup_new-place');  //карточка 
export const popupPhotoTemplate = document.querySelector('.popup_photo-template'); //предварительный просмотр изображения 

//Формы 
export const formProfile = document.querySelector('.popup__form_profile'); //для профиля 
export const formNewPlace = document.querySelector('.popup__form_new-place'); //для создания карточки 

//попап профиля 
export const nameInput = popupProfile.querySelector('.popup__input_form-name');
export const jobInput = popupProfile.querySelector('.popup__input_form-about');

export const profileInfoName = document.querySelector('.profile__info-name');
export const profileInfoAbout = document.querySelector('.profile__info-about');

//Попап карточки  
export const placeInput = popupNewPlace.querySelector('.popup__input_form-name');
export const linkInput = popupNewPlace.querySelector('.popup__input_form-about');

//Попап изображения 
export const popupImage = popupPhotoTemplate.querySelector('.popup__image');//изображение в попапе  
export const popupCaption = popupPhotoTemplate.querySelector('.popup__caption');//подпись изображения 

export const elementsContainer = document.querySelector('.elements');// блок карточек 
export const template = document.querySelector('.template').content; //блок добавления карточек через js

//массив карточек
export const initialCards = [
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
  ]; 

  //валидация
export const validationData = {
    formSelector: '.popup__form',  
    inputSelector: '.popup__input',  
    submitButtonSelector: '.popup__button',  
    inactiveButtonClass: 'popup__button_inactive',  
    inputErrorClass: 'error__active',  
    errorClass: 'popup__input_form-error'  
  };