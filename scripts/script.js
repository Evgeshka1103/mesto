//Кнопки открытия попапов 
const profileEditButton = document.querySelector('.profile__edit-button'); //откр попап профиля 
const profileButton = document.querySelector('.profile__button'); //откр попап карточки 
//Кнопки попапа 
const popupButtonCloseList = document.querySelectorAll('.popup__button-close'); //закрыть попап 
const popupButton = document.querySelectorAll('.popup__button');//сохранить(создать) 
//Попап 
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
/*//Попап карточки 
const placeInput = popupNewPlace.querySelector('.popup__form-name');
const linkInput = popupNewPlace.querySelector('.popup__form-about');

const elementsMaskGroup = document.querySelector('.elements__mask-group');
const elementsSight = document.querySelector('.elements__sight');*/

//Попап изображения 
const popupImage = popupPhotoTemplate.querySelector('.popup__image');//изображение в попапе  
const popupCaption = popupPhotoTemplate.querySelector('.popup__caption');//подпись изображения 

const elementsContainer = document.querySelector('.elements');// блок карточек 
const template = document.querySelector('.template').content; //блок добавления карточек через js 


//добавляем карточки из массива 
const renderItems = () => {
    initialCards.forEach(renderCard);

}

const createCard = (element) => {
    const placeElement = template.cloneNode(true);
    placeElement.querySelector('.elements__sight').textContent = element.name;
    const buttonImage = placeElement.querySelector('.elements__mask-group');
    buttonImage.src = element.link;
    buttonImage.alt = element.name;


    //Слушатель кнопок 

    const buttonDelete = placeElement.querySelector('.elements__delete');//кнопка удаления карточки 
    buttonDelete.addEventListener('click', handleDelete);

    const buttonlike = placeElement.querySelector('.elements__like');//кнопка лайка 
    buttonlike.addEventListener('click', handleLike);

    buttonImage.addEventListener('click', handlePreview);

    return placeElement;


}

function renderCard(item) {
    const card = createCard(item);
    elementsContainer.prepend(card);
}

//форма профиля 
function formSubmitHandlerProfile(evt) {
    evt.preventDefault();

    profileInfoName.textContent = nameInput.value;
    profileInfoAbout.textContent = jobInput.value;
    closePopups(popupProfile);
}
formProfile.addEventListener('submit', formSubmitHandlerProfile);

//заполняем поля ввода
function inputName() {

    nameInput.value = profileInfoName.textContent;
    jobInput.value = profileInfoAbout.textContent;
    openPopups(popupProfile);
}
profileEditButton.addEventListener('click', inputName);

//добавление карточки 
function handleSubmit(evt) {
    evt.preventDefault()
    renderCard({ name: placeInput.value, link: linkInput.value });
    evt.target.reset();
    closePopups(popupNewPlace);
}

//открытие попапа 
function openPopups(popup) {
    popup.classList.add('popup__opened');
}

//закрытие попапа 
function closePopups(popup) {
    popup.classList.remove('popup__opened');
}


//предварительный просмотр 
function handlePreview(evt) {
    popupImage.src = evt.target.closest('.elements__mask-group').url;
    popupImage.alt = evt.target.closest('.elements__card').querySelector('.elements__sight').textContent;
    popupCaption.textContent = evt.target.closest('.elements__card').querySelector('.elements__sight').textContent;
    openPopups(popupPhotoTemplate);
}

//удаление карточки 
function handleDelete(evt) {
    evt.target.closest('.elements__card').remove();
}

//лайк карточки 
function handleLike(evt) {
    evt.target.classList.toggle('elements__like_active');
}


profileButton.addEventListener('click', () => openPopups(popupNewPlace));

// следим за событием submit 
formNewPlace.addEventListener('submit', handleSubmit);



popupButtonCloseList.forEach((button) => {
    button.addEventListener('click', (evt) => {
        const popup = evt.target.closest('.popup');
        closePopups(popup);
    })

});
/*
//Закрть по клику на overlay 
popups.forEach((popup) => { 
    popup.addEventListener('mousedown', (evt) => { 
        overlayHandler(evt, popup)}); 
  }) 
  
  //Следим за оверлей
  function overlayHandler(evt, popup) { 
    if (evt.target.classList.contains('popup_opened')) { 
      closePopups(popup); 
    } else if (evt.target.classList.contains('.popup__button-close')) { 
      closePopups(popup); 
    } 
  } 
  
  //Закрытть по клику на ESC
  function escapeHandler(evt) { 
    if (evt.key === 'Escape') { 
        const openedPopup = document.querySelector('.popup_opened'); 
        closePopups(openedPopup); 
    } 
  } */

renderItems(); 