let editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__button-close');


let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-about');
let popupButton = document.querySelector('.popup__button');
let profileInfoName = document.querySelector('.profile__info-name');
let proleInfoAbout = document.querySelector('.profile__info-about');


function openPopup(event) {
    popup.classList.add('popup__opened');
    nameInput.value = profileInfoName.textContent;
    jobInput.value = proleInfoAbout.textContent;
}
editButton.addEventListener('click', openPopup);

function closePopup(event) {
    popup.classList.remove('popup__opened');
}
popupCloseButton.addEventListener('.click', closePopup);



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value
    proleInfoAbout.textContent = jobInput.value
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 