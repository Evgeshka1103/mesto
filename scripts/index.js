import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//Кнопки открытия попапов 
const profileEditButton = document.querySelector('.profile__edit-button'); //откр попап профиля 
const buttonPlace = document.querySelector('.profile__button'); //откр попап карточки
/*const openCardPopup = document.querySelector('.profile__button'); //откр попап карточки */
//Кнопки попапа 
const popupButtonCloseList = document.querySelectorAll('.popup__button-close'); //закрыть попап 
/*const popupButton = document.querySelectorAll('.popup__button');//сохранить(создать) */

//Попап 
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');  //профиль 
const popupNewPlace = document.querySelector('.popup_new-place');  //карточка 
const popupPhotoTemplate = document.querySelector('.popup_photo-template'); //предварительный просмотр изображения 

//Формы 
const formProfile = document.querySelector('.popup__form_profile'); //для профиля 
const formNewPlace = document.querySelector('.popup__form_new-place'); //для создания карточки 

//попап профиля 
const nameInput = popupProfile.querySelector('.popup__input_form-name');
const jobInput = popupProfile.querySelector('.popup__input_form-about');

const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoAbout = document.querySelector('.profile__info-about');

//Попап карточки  

const placeInput = popupNewPlace.querySelector('.popup__input_form-name');
const linkInput = popupNewPlace.querySelector('.popup__input_form-about');

/*const elementsMaskGroup = document.querySelector('.elements__mask-group');
const elementsSight = document.querySelector('.elements__sight');*/

//Попап изображения 
const popupImage = popupPhotoTemplate.querySelector('.popup__image');//изображение в попапе  
const popupCaption = popupPhotoTemplate.querySelector('.popup__caption');//подпись изображения 

const elementsContainer = document.querySelector('.elements');// блок карточек 
/*const template = document.querySelector('.template').content; //блок добавления карточек через js*/

//массив карточек
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
  ]; 


function renderCard(data) { 
    const card = new Card(data, '.template', handlePreview);
    const cardElement = card.generateCard();

    return cardElement;
  };
  
  function createCard(data) {
    elementsContainer.prepend(renderCard(data));
  }
  
  initialCards.forEach((data) => {
    createCard(data);
  });

const handleSubmit = (evt) => { 
  evt.preventDefault() 
  createCard({name:placeInput.value, link:linkInput.value}); 
  closePopups(popupNewPlace); 
  formNewPlace.reset(); //очистка полей ввода 
} 
formNewPlace.addEventListener('submit', handleSubmit);

//форма профиля 
function formSubmitHandlerProfile(evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoAbout.textContent = jobInput.value;
    closePopups(popupProfile);
}
formProfile.addEventListener('submit', formSubmitHandlerProfile);

//заполняем поля ввода
function inputName(evt) { 
  evt.preventDefault() 
  nameInput.value = profileInfoName.textContent; 
  jobInput.value = profileInfoAbout.textContent; 
  editProfileValidator.clearError();
  openPopups(popupProfile); 
} 
profileEditButton.addEventListener('click', inputName);

//открытие попапа 
function openPopups(popup) {
    popup.classList.add('popup__opened');
    document.addEventListener('keydown', escapeHandler);
} 

//закрытие попапа 
function closePopups(popup) {
    popup.classList.remove('popup__opened');
    document.removeEventListener('keydown', escapeHandler);
}

//предварительный просмотр 
function handlePreview(link, name) {
  popupImage.src = link; 
  popupImage.alt = name; 
  popupCaption.textContent = name; 
  openPopups(popupPhotoTemplate); 
} 

buttonPlace.addEventListener('click', openPopupNewPlace); 

function openPopupNewPlace() {
  newPlaceValidator.clearError();
  formNewPlace.reset(); 
  openPopups(popupNewPlace);
}
 
popupButtonCloseList.forEach((evt) => {
    evt.addEventListener('click', (evt) => {
        const popup = evt.target.closest('.popup');
        closePopups(popup);
    })
});

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        overlayHandler(evt, popup)
    });
})

//закрыть на overlay & close
function overlayHandler(evt, popup) {
    if (evt.target.classList.contains('popup__opened')) {
        closePopups(popup);
    } else if (evt.target.classList.contains('.popup__button-close')) {
        closePopups(popup);
    }
};

//закрыть на esc
function escapeHandler(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup__opened');
        closePopups(openedPopup);
    }
};

//валидация
const validationData = {
  formSelector: '.popup__form',  
  inputSelector: '.popup__input',  
  submitButtonSelector: '.popup__button',  
  inactiveButtonClass: 'popup__button_inactive',  
  inputErrorClass: 'error__active',  
  errorClass: 'popup__input_form-error'  
};

const newPlaceValidator = new FormValidator(validationData, popupNewPlace); //валидатор формы новой карточки
newPlaceValidator.enableValidation();

const editProfileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля
editProfileValidator.enableValidation();
