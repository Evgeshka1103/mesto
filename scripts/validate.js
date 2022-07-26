const showInputError = (formElement, inputElement, errorMessage, settings) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(settings.errorClass); 
    errorElement.textContent = errorMessage; 
    errorElement.classList.add(settings.inputErrorClass); 
  }; 

  const hideInputError = (formElement, inputElement, settings) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(settings.errorClass); 
    errorElement.classList.remove(settings.inputErrorClass); 
    errorElement.textContent = ''; 
  }; 

  const checkInputValidity = (formElement, inputElement, settings) => { 
    if (!inputElement.validity.valid) { 
      showInputError(formElement, inputElement, inputElement.validationMessage, settings); 
    } else { 
      hideInputError(formElement, inputElement, settings); 
    } 
  }; 

  const hasInvalidInput = (inputList) => { 
    return inputList.some((inputElement) => { 
      return !inputElement.validity.valid; 
    }) 
  };  

  const toggleButtonState = (inputList, buttonElement, settings) => { 
    if (hasInvalidInput(inputList)) { 
      buttonElement.classList.add(settings.inactiveButtonClass); 
      buttonElement.setAttribute('disabled', true); 
    } else { 
      buttonElement.classList.remove(settings.inactiveButtonClass); 
      buttonElement.removeAttribute('disabled', true); 
    } 
  };  

  const setEventListeners = (formElement, settings) => { 
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector)); 
    const buttonElement = formElement.querySelector(settings.submitButtonSelector); 
      toggleButtonState(inputList, buttonElement, settings); 
    
      inputList.forEach((inputElement) => { 
        inputElement.addEventListener('input', function () { 
          checkInputValidity(formElement, inputElement, settings); 
          toggleButtonState(inputList, buttonElement, settings); 
        }); 
     }); 
    }; 

  const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector)); 
    formList.forEach((formElement) => { 
      setEventListeners(formElement, settings); 
    }); 
  };

  const settings = { 
    formSelector: '.popup__form', 
    inputSelector: '.popup__input', 
    submitButtonSelector: '.popup__button', 
    inactiveButtonClass: 'popup__button_inactive', 
    inputErrorClass: 'error__active', 
    errorClass: 'popup__input_form-error' 
  };
  
  enableValidation(settings);