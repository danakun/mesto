import "./index.css";

import  Card  from '../components/Card.js';
import  FormValidator  from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import  PopupWithImage  from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import  Section  from '../components/Section.js';
import  UserInfo  from '../components/UserInfo.js';

import {
  validationObject,
  buttonProfileEditing,
  buttonPicAddition,
  profileForm,
  photoForm,
} from '../utils/constants.js';

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

