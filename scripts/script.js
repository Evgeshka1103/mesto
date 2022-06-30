let profileEditButton = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__button-close');


let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-about');

let profileInfoName = document.querySelector('.profile__info-name');
let proleInfoAbout = document.querySelector('.profile__info-about');


function openPopup() {
    popup.classList.add('popup__opened');
    nameInput.value = profileInfoName.textContent;
    jobInput.value = proleInfoAbout.textContent;
}


function closePopup(event) {
    popup.classList.remove('popup__opened');
}




function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value
    proleInfoAbout.textContent = jobInput.value
    closePopup();
}

profileEditButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 

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