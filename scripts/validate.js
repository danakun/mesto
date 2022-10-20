const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};


// Функция валидации форм
function enableValidation(obj) {     // Достаём нужный нам ключ из объекта
  const { formSelector } = obj;
  const formList = Array.from(document.querySelectorAll(formSelector)); // Найдём все формы с указанным классом в DOM, делаем из них массив методом Array.from
  formList.forEach((formElement) => {     // Проходим по ним циклом for each
    setEventListeners(formElement, obj);  // и для каждого вызываем функцию setEventListeners, передав ей элемент формы и объект валидации
  });
};

// Вызовем функцию валидации форм
enableValidation(validationObject);


// Функция, показывающая ошибку
function showInputError(formElement, inputElement, errorMessage, obj) {
  const { inputErrorClass } = obj;  // Достаём нужные ключи из объекта
  const { errorClass } = obj;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // Находим элемент ошибки внутри самой функции
  inputElement.classList.add(inputErrorClass); // Добавляем классы, используя ключи из объкта
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage; // Присваеваем errorMessage тексту errorElement
};

// Функция, скрывающая ошибку
function hideInputError(formElement, inputElement, obj) {
  const { inputErrorClass } = obj;
  const { errorClass } = obj;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass); // Убираем присвоенные классы и значение errorElement
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

// Функция, проверяющая валидность
function isValid(formElement, inputElement, obj) {
  const { formSelector, ...rest } = obj; // передаем этой функии параметры formSelector и все оставшиеся свойства объекта в виде ...rest
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement, obj);
  }
};

// Функция, проверяющая на наличие невалидного инпута
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}


// Функция, переключающая состояние кнопки
function toggleButtonState(inputList, buttonElement, obj) {
  const { inactiveButtonClass } = obj; // Достаём нужные ключи из объекта
  if (hasInvalidInput(inputList)) {    // Прописываем условие, используя функцию hasInvalidInput
    buttonElement.classList.add(inactiveButtonClass); // Добавляем класс
    buttonElement.disabled = true;// Добавляем disabled
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

// Функция проставление слушателей
  function setEventListeners(formElement, obj) {
    const { inputSelector } = obj; // Достаём нужные ключи из объекта
    const { submitButtonSelector } = obj;
    // Находим все поля внутри формы, сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, obj);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid и toggleButtonState, передав ей форму, инпут и объект
        isValid(formElement, inputElement, obj)
        toggleButtonState(inputList, buttonElement, obj);
      });
    });
  };



