
import  Card  from './Card.js';
import  FormValidator  from './FormValidator.js';
import { initialCards } from './cards.js';
import  PopupWithImage  from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import  Section  from './Section.js';
import  UserInfo  from './UserInfo.js';
import Popup from "./Popup.js";;


const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

// Переменные для трех попапов
const popupProfileOverlay = document.querySelector('.popup-profile');
const popupOverlayPhoto = document.querySelector('.popup-add-photo');
//const popupLightbox = document.querySelector('.popup-photo');
// const popups = document.querySelectorAll(".popup");
// Переменные для кнопок открытия попапов
const buttonProfileEditing = document.querySelector('.profile__edit-button');
const buttonPicAddition = document.querySelector(".profile__add-button");
// Переменные для форм попапа
const profileForm = popupProfileOverlay.querySelector('.popup__form');
const photoForm = popupOverlayPhoto.querySelector('.popup__form')
// Переменные для инфо в профиле сайта
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
// Переменные для инпутов попапа профиль
const newName = document.querySelector('.popup__input_type_name');
const newJob = document.querySelector('.popup__input_type_job')
// Переменные для карточки и их массива
const photoList = document.querySelector(".photo-grid");

 const newTitle = document.querySelector('.popup__input_type_title');
 const newPhoto = document.querySelector('.popup__input_type_photo')

// Функция создания секции карточек по новому заданию
// где-то тут мне надо использовать рендерер для связи двух классов

const newSection = new Section({
  items: initialCards,
    renderer: (cardData) => {
    const card = createNewCard(cardData);
    newSection.addItem(card);
    }
}, '.photo-grid'
);

// Функция создания карточек
const createNewCard = (cardData) => {
  const card = new Card(cardData, '.card-template',  (name, link) => { popupLightbox.open(name, link) });
  return card.createCard()
}

// Рендер начальных карточек с использованием публичного метода из класса Section
newSection.renderItems() //добавила в пт!!! проверить

// Объявляем по отдельности валидаторы для обеих форм
const profileValidator = new FormValidator(validationObject, profileForm);
const photoAddValidator = new FormValidator(validationObject, photoForm);

// Запускаем валидацию
profileValidator.enableValidation();
photoAddValidator.enableValidation();

// userInfo создаем экземпляр класса инфо профиля
const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
});


// popup ProfileOverlay редактируем профиль
const popupProfileEdit = new PopupWithForm('.popup-profile', (inputValues) => {
  popupProfileEdit.close();
  userInfo.setUserInfo(inputValues);
});
popupProfileEdit.setEventListeners();


// popup OverlayPhoto добавляем новое фото и подпись
const popupAddPhoto = new PopupWithForm('.popup-add-photo', (cardData) => {
  const card = createNewCard(cardData);
  newSection.addItem(card);
  popupAddPhoto.close();
  photoAddValidator.deactivateButton(); //проверить
});
popupAddPhoto.setEventListeners();

//popup Lightbox создаем экземпдяр попапа с фото
const popupLightbox = new PopupWithImage('.popup-photo');
popupLightbox.setEventListeners();


// Слушатель кнопки открытия редактирования профиля
buttonProfileEditing.addEventListener('click', () => {
  popupProfileEdit.setInputValues(userInfo.getUserInfo());
  userInfo.getUserInfo();
  profileValidator.deactivateButton();
  profileValidator.resetErrors();
  popupProfileEdit.open();
});

// Слушатель кнопки открытия добавления фото
 buttonPicAddition.addEventListener('click', () => {
   photoAddValidator.resetErrors();
   popupAddPhoto.open();
 });

// Функция рендер карточек заменена по идее addItem из класса Section
// const renderCard = (element, container) => {
//   container.prepend(element);
// }

// Функция принятия значения в профиль из импута
// function takeInfo() {
//   newName.value = profileName.textContent;
//   newJob.value = profileJob.textContent;
// }

// Функция открытия попапа
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener('keydown', handleEscUp);
//  }

// Функция закрытия попапа
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener('keydown', handleEscUp);  // удаляем событие keydown
// }

// Функция закрытия по esc
// function handleEscUp(evt) { // узнаем в каком месте произошел клик:
//   if (evt.key === "Escape") {
//     const activePopup = document.querySelector('.popup_opened');
//     closePopup(activePopup);
//   };
//  };

// Функция передачи данных с формы в профиль
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = newName.value;
//   profileJob.textContent = newJob.value;
//   profileValidator.deactivateButton();
//   closePopup(popupProfileOverlay);
// }

// Обработчик формы добавления элемента с фото
// function handlePhotoFormSubmit(evt) {
//   evt.preventDefault();
//   const cardData = {
//     name: newTitle.value,
//     link: newPhoto.value
// }

//   renderCard(createNewCard(cardData), photoList);
//   evt.target.reset();
//   // деактивируем кнопку submit для предотвращения добавления пустой карточки
//   photoAddValidator.deactivateButton();
//   closePopup(popupOverlayPhoto);
// }


 // Функция клика по кнопке и по оверлей
// function handleClickOverlay(evt) {
//   if (evt.target.classList.contains('popup')) {
//   closePopup(evt.target);
// }
// }

// Слушатели закрытия попапов по кликам на оверлей
// popupProfileOverlay.addEventListener('click', handleClickOverlay);
// popupOverlayPhoto.addEventListener('click', handleClickOverlay);
// popupLightbox.addEventListener('click', handleClickOverlay);


// // Закрытие попапа по клику на кнопку
// popups.forEach((popup) => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup__close')) {
//         // Закрываем попап только при клике по нужному элементу
//       closePopup(popup);
// }
// });
// });

// Слушатель кнопки создать профиль
//profileForm.addEventListener('submit', handleProfileFormSubmit);

// "Слушатель" формы добавления элемента
//photoForm.addEventListener('submit', handlePhotoFormSubmit);



// Функция рендер дефолтных карточек
// initialCards.forEach( cardData => {
//   renderCard(createNewCard(cardData), photoList);
// });


// Переменные для фото и подписи из лайтбокса
// const lightboxPhoto = document.querySelector('.popup__photo')
// const lightboxPhotoCaption = document.querySelector('.popup__caption')

// Функция фото в лайтбокс-попапе
// const openLightbox = (name, link) => {
//   lightboxPhoto.src = link;
//   lightboxPhoto.alt = name;
//   lightboxPhotoCaption.textContent = name;
//   openPopup(popupLightbox);
// }
