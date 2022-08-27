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

//карточки из массива
const initialCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = renderCard(item);
    initialCardList.addItem(cardElement);
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




const newPlaceValidator = new FormValidator(validationData, popupNewPlace); //валидатор формы новой карточки 
newPlaceValidator.enableValidation(); 

const editProfileValidator = new FormValidator(validationData, popupProfile);//валидатор формы профиля 
editProfileValidator.enableValidation();

