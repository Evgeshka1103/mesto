import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
  profileEditButton,
  buttonPlace,
  popupProfile,
  popupNewPlace,
  nameInput,
  jobInput,
  initialCards,
  validationData,
} from '../utils/constants.js';

//карточки из массива
const defaultCardList = new Section({
  items: initialCards, 
  renderer: (item) => {
    generateCard(item);
    return generateCard(item).render();
  }
}, '.elements');

const generateCard = (data) => { 
  const card = new Card(data, handleCardClick, '.template'); 
  return card;
};

//открыть предварительный просмотр изображения
const popupPreview = new PopupWithImage('.popup_photo-template');

const handleCardClick = (name, link) => {
  popupPreview.open(name, link);
}

popupPreview.setEventListeners();

//создать новую карточку
const popupPlace = new PopupWithForm('.popup_new-place', (data) => {
  generateCard(data);

  const newCard = generateCard(data).render();
  defaultCardList.setItem(newCard);

  popupPlace.close();
});

popupPlace.setEventListeners();

//пользователь редактирует профиль
const userInput = new UserInfo({
  nameSelector: '.profile__info-name',
  aboutSelector: '.profile__info-about',
});

// попап профиля
const popupUser = new PopupWithForm('.popup_profile', () => {
    userInput.setUserInfo({
      name: nameInput.value,
      about: jobInput.value
    });
    popupUser.close();
  }
);

popupUser.setEventListeners();

//редактируем профиль
function openProfile(){
  popupUser.open();

  const profileData = userInput.getUserInfo();
  nameInput.value = profileData.name;
  jobInput.value = profileData.about;
  
  editProfileValidator.clearError(); 
}

// кнопка открытия попапа профиля
profileEditButton.addEventListener('click', () => {
  openProfile();
});

// //кнопка новая карточка
buttonPlace.addEventListener('click', () => {
  newPlaceValidator.clearError(); 
  popupPlace.open();
});

defaultCardList.renderItems();

const newPlaceValidator = new FormValidator(validationData, popupNewPlace); //валидатор формы новой карточки 
newPlaceValidator.enableValidation(); 

const editProfileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля 
editProfileValidator.enableValidation();