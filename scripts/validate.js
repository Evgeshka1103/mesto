// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

const formName = document.querySelector('.popup__form-name_type-error'); //для профиля 

formAddCard.addEventListener('sumbit', sendForm)

function sendForm(evt) {
    evt.preventDefault();

    const form = evt.target;
    if (form.checkValidity()) {
        alert('Форма валидна')
    } else {
        alert('Форма не валидна')
    }

}