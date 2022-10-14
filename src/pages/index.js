import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import {

   profileEditButton,
   buttonPlace,
   buttonAvatar,
   popupAvatarEdit,
   popupProfile,
   popupNewPlace,
   nameInput,
   jobInput,
   validationData

} from '../utils/constants.js';
//import { isAbsoluteURL } from 'webpack-dev-server';

const api = new Api({
   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-51',
   headers: {
      authorization: '5c931bad-1961-412c-8ce8-c9feec65b03a',
      'Content-Type': 'application/json'
   }
});

let userId = null;

//открыть предварительный просмотр изображения 
const popupPreview = new PopupWithImage('.popup_photo-template');

popupPreview.setEventListeners();

//карточки из массива 
const defaultCardList = new Section({
   renderer: (item, id) => {
      const newCardElement = createCard(item, id);
      defaultCardList.setItem(newCardElement);
   }
}, '.elements');


function toggleLike(card, cardId, isLiked) {
   if (isLiked) {
      api
      .deleteLike(cardId)
         .then(res => {
            card.toggleLike(false);
            card.setLikesNumber(res.likes);
         })
         .catch(function(err) {
            console.log("Ошибка", err);
         });
   } else {
      api.addLike(cardId)
         .then(res => {
            card.toggleLike(true);
            card.setLikesNumber(res.likes);
         })
         .catch(function(err) {
            console.log("Ошибка", err);
         });
   }
}

// попап профиля 
const popupUser = new PopupWithForm({
   popupSelector: '.popup_profile',
   handleFormSubmit: (data) => {
      popupUser.renderButtonLoading(true);
      api
         .patchUserInfoData(data.name, data.about)
         .then(res => {
            patchUserInfo(res);
            popupUser.close();
         })
         .catch(function(err) {
            console.log("Ошибка", err);
         })
         .finally(() => popupPlace.renderButtonLoading(false))
   }
});
popupUser.setEventListeners();

function patchUserInfo(data) {
   userInput.setUserInfo(data.name, data.about);
}

function createCard(data, userId) {

   const isLiked = (data.likes.some(element => element._id === userId))
      ? true
      : false;

   const card = new Card({
      data,
      handleCardClick: () => {
         popupPreview.open(data.link, data.name);
      }
   },
      '.template',
      cardDelete,
      toggleLike,
      userId
   );

   const addCard = card.generateCard();
   card.toggleLike(isLiked);
   return addCard;
}

//создать новую карточку 
const popupPlace = new PopupWithForm({
   popupSelector: '.popup_new-place',
   handleFormSubmit: (data) => {
 console.log(data);
      
      popupPlace.renderButtonLoading(true);
      api
         .postUserCardData(data.name, data.link)
         .then(res => {
            const newCard = createCard(res, res.owner._id);
            defaultCardList.setItem(newCard);
            popupPlace.close();
         })
         .catch(function(err) {
            console.log("Ошибка", err);
         })
         .finally(() => popupPlace.renderButtonLoading(false))
   }
}
);
popupPlace.setEventListeners();

//удалить карточку
const popupDelete = new PopupWithConfirmation({
   popupSelector: '.popup_confirm',
   handleFormSubmit: (id, card) => {
      
      api
         .deleteCard(id)
         .then(() => {
            card.handleDelete();
            popupDelete.close();
         })
         .catch(function(err) {
            console.log("Ошибка", err);
         });
   }
});
popupDelete.setEventListeners();

function cardDelete(cardId, card) {
   popupDelete.open(cardId, card);
}

//изменить аватар
const popupAvatar = new PopupWithForm({
   popupSelector: '.popup_avatar',
   handleFormSubmit: (data) => {
      popupAvatar.renderButtonLoading(true);
      api
         .patchUserAvatarData(data.link)
         .then(res => {
            patchUserAvatar(res);
            popupAvatar.close();
         })
         .catch(function(err) {
            console.log("Ошибка", err);
         })
         .finally(() => popupAvatar.renderButtonLoading(false));
   }
});
popupAvatar.setEventListeners();

function patchUserAvatar(data) {
   userInput.setUserAvatar(data.avatar);
}

//пользователь редактирует профиль 
const userInput = new UserInfo({
   nameSelector: '.profile__info-name',
   aboutSelector: '.profile__info-about',
   avatarSelector: '.profile__avatar',
});

//редактируем профиль 
function openProfile() {
   const profileData = userInput.getUserInfo();
   nameInput.value = profileData.name;
   jobInput.value = profileData.about;

   popupUser.open();
   editProfileValidator.clearError();
}

//отрисуем
function renderPage() {
   Promise.all([
      api
         .getUserInfo(),
      api
         .getInitialCards()
   ])
      .then(([userData, defaultCards]) => {
         patchUserInfo(userData);
         patchUserAvatar(userData);
         userId = userData._id;
         defaultCardList.renderItems(defaultCards.reverse(), userId);
      })
      .catch(function(err) {
         console.log("Ошибка", err);
      });
}

//кнопка открытия попапа профиля 
profileEditButton.addEventListener('click', () => {
   openProfile();
});

//кнопка новая карточка 
buttonPlace.addEventListener('click', () => {
   newPlaceValidator.clearError();
   popupPlace.open();
});

//кнопка изменить аватар
buttonAvatar.addEventListener('click', () => {
   editAvatarValidator.clearError();
   popupAvatar.open();
});

//валидация
const newPlaceValidator = new FormValidator(validationData, popupNewPlace); //валидатор формы новой карточки  
newPlaceValidator.enableValidation();

const editProfileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля  
editProfileValidator.enableValidation();

const editAvatarValidator = new FormValidator(validationData, popupAvatarEdit);//валидатор формы аватар
editAvatarValidator.enableValidation();

renderPage();