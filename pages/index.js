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
  validationData
} from '../utils/constants.js';

const popupPreview = new PopupWithImage('.popup_photo-template');

//карточки из массива
const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = renderCard(item);
    defaultCardList.addItem(cardElement);
  }
}, '.elements'
);

const renderCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      popupPreview.open(data.name, data.link);
    }
  },
    '.template');
  return card.generateCard();
}

//создать новую карточку
const popupPlace = new PopupWithForm({
  popupSelector: '.popup_new-place',
  submitForm: (data) => {
    const newPlace = renderCard(data);
    defaultCardList.addItem(newPlace);
    popupPlace.close();
  }
});

popupPlace.setEventListener();

//пользователь редактирует профиль
const userInput = new UserInfo({
  nameSelector: '.profile__info-name',
  jobSelector: '.profile__info-about',
});

//попап профиля
const popupUser = new PopupWithForm({
  popupSelector: '.popup_profile',
  submitForm: (input) => {
    userInput.setUserInfo(input);
    popupUser.close();
  }
});
popupUser.setEventListener();



//редактируем профиль
function openProfile(){
  const profileData = userInput.getUserInfo();
  nameInput.value = profileData.name;
  jobInput.value = profileData.job;
  
  popupUser.open();
  editProfileValidator.resetValidation();
}


//кнопка открытия попапа профиля
profileEditButton.addEventListener('click', () => {
  openProfile();
});

//кнопка новая карточка
buttonPlace.addEventListener('click', () => {
  newPlaceValidator.resetValidation();
  popupPlace.open();
});

defaultCardList.renderItems();

popupPreview.setEventListener();

const newPlaceValidator = new FormValidator(validationData, popupNewPlace); //валидатор формы новой карточки 
newPlaceValidator.enableValidation(); 

const editProfileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля 
editProfileValidator.enableValidation();

