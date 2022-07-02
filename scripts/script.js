//кнопку редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
//кнопку добавления карточки
const profileButton = document.querySelector('.profile__button');
//кнопка закрытия попапа
const popupButtonClose = document.querySelector('.popup__button-close');

//попап профиля 
const popupProfile = document.querySelector('.popup_profile');  
//попап новой карточки
const popupPlace = document.querySelector('.popup_new-place'); 

//место
const newPlaceInput = popupNewPlace.querySelector('.popup__form-name');
//ссылка на изображение
const linkInput = popupNewPlace.querySelector('.popup__form-about');

//форма профиля
const formProfile = document.querySelector('.popup__form_profile');

const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-about');

const profileInfoName = document.querySelector('.profile__info-name');
const proleInfoAbout = document.querySelector('.profile__info-about');


//форма добавления новввой карточки
const formPlace = document.querySelector('.popup__form_new-place');

const elementsTemplate = document.querySelector('.elements-template').content;







function inputName(evt) {
  evt.preventDefault()
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopups(popupProfile);
}


function openPopups(popup) {
  popup.classList.add('popup_opened');
}


function closePopups(popup) {
  popup.classList.remove('popup_opened');
}



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value
    proleInfoAbout.textContent = jobInput.value
    closePopups();
}

profileEditButton.addEventListener('click', openPopups);
popupButtonClose.addEventListener('click', closePopups);
formElement.addEventListener('submit', formSubmitHandler); 

const initialCards = [
        {
          name: 'Испания',
          link: 'https://images.unsplash.com/photo-1655317175286-c9ea784e5631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
          name: 'Германия',
          link: 'https://images.unsplash.com/photo-1655064605657-16a5b17545fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80'
        },
        {
          name: 'Италия',
          link: 'https://images.unsplash.com/photo-1653479310695-b4f2948b3b2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
        },
        {
          name: 'Франция',
          link: 'https://images.unsplash.com/photo-1653575625650-e3ca2e30afb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
        },
        {
          name: 'Венгрия',
          link: 'https://images.unsplash.com/photo-1641210032600-049d8cd33f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
        },
        {
          name: 'Дубай',
          link: 'https://images.unsplash.com/photo-1653064029095-41aa4c1c8f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1449&q=80'
        }
]; 
const renderItems = () => {
  initialCards.forEach(renderCard);
}

const createCard = (element) => {
  const newPlaceElement = elementsTemplate.cloneNode(true);
  newPlaceElement.querySelector('.elements__sight').textContent = element.name;
  newPlaceElement.querySelector('.elements__mask-group').src = element.link;
};