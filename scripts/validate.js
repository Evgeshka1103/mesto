formProfile.addEventListener('sumbit', sendForm)
formProfile.addEventListener('input', handlerInputForm)

validateForm(formProfile)

function sendForm(evt) {
    evt.preventdefault();

    const form = evt.target;

    if(form.checkValidity()) {
        alert("Форма валидна")
    } else {
        alert("Форма не валидна")
    }
}

function handlerInputForm(evt) {
    const curentForm = evt.currentTarget;

    validateForm(curentForm)
    validateInput(evt.target)
}

function validateForm(form) {
    const popupButton = form.querySelectorAll('.popup__button')

    if(form.checkValidity()) {
        popupButton.removeAtribute('disabled')
        popupButton.classList.add('.popup__button_valid');
        popupButton.classList.remove('.popup__button_invalid');
    } else{
        popupButton.setAtribute('disabled', true)
        popupButton.classList.remove('.popup__button_valid');
        popupButton.classList.add('.popup__button_invalid');
    }
}