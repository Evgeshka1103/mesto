let profileEditButton = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup_profile');
const popupButtonClose = document.querySelector('.popup__button-close');


let formElement = document.querySelector('.popup__form_profile');

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

/*new-place
let profileEditButton = document.querySelector('.profile__button');

const popup = document.querySelector('.popup_new-place');
const popupButtonClose = document.querySelector('.popup__button-close');


let formElement = document.querySelector('.popup__form_new-place');

let nameInput = document.querySelector('.popup__form-name');
let linkInput = document.querySelector('.popup__form-about');




function openPopup() {
    popup.classList.add('popup__opened');
    placeInput.value = popupFormName.textContent;
    linkInput.value = popupFormAbout.textContent;
}


function closePopup(event) {
    popup.classList.remove('popup__opened');
}




function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = placeInput.value
    proleInfoAbout.textContent = linkInput.value
    closePopup();
}

profileEditButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 
*/
//massiv
const initialCards = [
    {
      name: "Архыз",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
    },
    {
      name: "Челябинская область",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
    },
    {
      name: "Иваново",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
    },
    {
      name: "Камчатка",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
    },
    {
      name: "Холмогорский район",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
    },
    {
      name: "Байкал",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
    }
  ];
  const placesContainer = document.querySelector(".elements");
const placeTemplate = document.querySelector(".template").content;

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const placeElement = placeTemplate
    .querySelector(".elements__card")
    .cloneNode(true);
  
  placeElement.querySelector(".elements__mask-group").src = link;
  placeElement.querySelector(".elements__sight").textContent = name;

  placesContainer.prepend(placeElement);
}

render();