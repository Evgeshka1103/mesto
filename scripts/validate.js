const showInputError = (formElement, inputElement, errorMessage) => { 
const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.add('popup__input_form-error'); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add('error__active'); 
}; 

const hideInputError = (formElement, inputElement) => { 
const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.remove('popup__input_form-error'); 
  errorElement.classList.remove('error__active'); 
  errorElement.textContent = ''; 
}; 

const checkInputValidity = (formElement, inputElement) => { 
  if (!inputElement.validity.valid) { 
    showInputError(formElement, inputElement, inputElement.validationMessage); 
  } else { 
    hideInputError(formElement, inputElement); 
  } 
}; 

const setEventListeners = (formElement) => { 
const inputList = Array.from(formElement.querySelectorAll('.popup__input')); 
const buttonElement = formElement.querySelector('.popup__button'); 
  toggleButtonState(inputList, buttonElement); 

  inputList.forEach((inputElement) => { 
    inputElement.addEventListener('input', function () { 
      checkInputValidity(formElement, inputElement); 
      toggleButtonState(inputList, buttonElement); 
    }); 
 }); 
}; 

const enableValidation = () => { 
  const formList = Array.from(document.querySelectorAll('.popup__form')); 
  formList.forEach((formElement) => { 
    setEventListeners(formElement); 
  }); 
}; 

const hasInvalidInput = (inputList) => { 
  return inputList.some((inputElement) => { 
    return !inputElement.validity.valid; 
  }) 
};  

const toggleButtonState = (inputList, buttonElement) => { 
  if (hasInvalidInput(inputList)) { 
    buttonElement.classList.add('popup__button_inactive'); 
    buttonElement.setAttribute('disabled', true); 

  } else { 
    buttonElement.classList.remove('popup__button_inactive'); 
    buttonElement.removeAttribute('disabled', true); 
  } 
};  

enableValidation({ 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__button', 
  inactiveButtonClass: 'popup__button_inactive', 
  inputErrorClass: 'error__active', 
  errorClass: 'popup__input_form-error' 
}); 