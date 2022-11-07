export class FormValidator {
  constructor (validationSelectors, form) {
    this._validationSelectors = validationSelectors;
    this._form = form;
    this._inputSelector = this._validationSelectors.inputSelector;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));   //_validationSelectors.inputSelector
    this._submitButtonSelector = validationSelectors.submitButtonSelector;
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

        // метод проверки валидности
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
     this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }

// Функция, показывающая ошибку
_showInputError(inputElement, errorMessage) {
  const { inputErrorClass, errorClass } = this._validationSelectors;
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`); // Находим элемент ошибки внутри самой функции
  inputElement.classList.add(inputErrorClass); // Добавляем классы, используя ключи из объкта
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage; // Присваеваем errorMessage тексту errorElement
};

// метод скрывающий ошибку
_hideInputError(inputElement) {
  const { inputErrorClass, errorClass } = this._validationSelectors;
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass); // Убираем присвоенные классы и значение errorElement
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

    // Функция, проверяющая на наличие невалидного инпута
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
  }

 // деактивации кнопки
deactivateButton() { //buttonElement
  this._buttonElement.classList.add(this._validationSelectors.inactiveButtonClass); // Добавляем класс
  this._buttonElement.disabled = true;// Добавляем disabled
}

// активации кнопки
_activateButton() { //buttonElement
  this._buttonElement.classList.remove(this._validationSelectors.inactiveButtonClass); // Снимаем класс
  this._buttonElement.disabled = false;// убираем disabled
}

   // Функция, переключающая состояние кнопки
_toggleButtonState() {    //inputList, buttonElement
  if (this._hasInvalidInput()) {    // Прописываем условие, используя функцию hasInvalidInput  inputList
    this.deactivateButton()        //buttonElement
  } else {
    this._activateButton()               //buttonElement
  }
}

// метод сброса ошибок для повторного откытия формы
   resetErrors() {
    this._form.reset();
    this._inputList.forEach((inputElement) => {
      //const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      this._hideInputError(inputElement);
    });
    //this._toggleButtonState();
  }

  // метод проставки слушателей
  _setEventListeners() {
    this._toggleButtonState();   //inputList, buttonElement
    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid и toggleButtonState, передав ей форму, инпут и объект
        this._isValid(inputElement);
        this._toggleButtonState(); //inputList, buttonElement
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();  // и для каждого вызываем функцию setEventListeners
  }


}
