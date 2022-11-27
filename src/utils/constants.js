// Объект валидации с настройками
const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

// Переменные для попапов
const popupProfileOverlay = document.querySelector('.popup-profile');
const popupOverlayPhoto = document.querySelector('.popup-add-photo');
// Переменные для кнопок открытия попапов
const buttonProfileEditing = document.querySelector('.profile__edit-button');
const buttonPicAddition = document.querySelector(".profile__add-button");
// Переменные для форм попапа
const profileForm = popupProfileOverlay.querySelector('.popup__form');
const photoForm = popupOverlayPhoto.querySelector('.popup__form')

export {
  validationObject,
  popupProfileOverlay,
  popupOverlayPhoto,
  buttonProfileEditing,
  buttonPicAddition,
  profileForm,
  photoForm,
};
