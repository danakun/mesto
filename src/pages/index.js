console.log('temp')

import "./index.css";

import  Card  from '../components/Card.js';
import  FormValidator  from '../components/FormValidator.js';
import  PopupWithImage  from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import  Section  from '../components/Section.js';
import  UserInfo  from '../components/UserInfo.js';

import {
  validationObject,
  buttonProfileEditing,
  buttonPicAddition,
  buttonAvatarEditing,
  profileForm,
  photoForm,
  avatarForm,
} from '../utils/constants.js';
import { api } from '../components/Api.js'


// Объявляем по отдельности валидаторы для необходимых форм
const profileValidator = new FormValidator(validationObject, profileForm);
const photoAddValidator = new FormValidator(validationObject, photoForm);
const avatarValidator = new FormValidator(validationObject, avatarForm);

// Запускаем валидацию
profileValidator.enableValidation();
photoAddValidator.enableValidation();
avatarValidator.enableValidation();

let userId;

Promise.all([api.getUserProfile(), api.getInitialCards()])    //промис гарантирует, что карточки придут после профиля
  .then(([userData, cards]) => {                                  //после получения ответа возьми id и проставь инфо о юзере,
    userId = userData._id;                                        //после отрендери карточки
    userInfo.setUserInfo(userData);

    newSection.renderItems(cards);
  })
  .catch((err) => console.log(err))                               //выведи ошибку если не пришла инфо
  .finally(() => {})


// // Вызов api для инфы профиля
// api.getUserProfile()
// .then(userData => {
//   userInfo.setUserInfo(userData)
//   userId = userData._id;
// })
// //.catch(err => console.log(`Ошибка.....: ${err}`))

// // Вызов api для начальных карточек
// api.getInitialCards()
// .then(cardList => {
//   cardList.forEach(cardData => {
//     const card = createNewCard(cardData);
//     newSection.addItem(card);
//   })
// })
//.catch(err => console.log(`Ошибка.....: ${err}`))


//Функция создания секции карточек
const newSection = new Section((card) =>
createNewCard(card),
'.photo-grid'
);


// userInfo создаем экземпляр класса инфо профиля
const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
  profilePictureSelector: '.profile__change-avatar-button'
});

// popup ProfileOverlay редактируем профиль
const popupProfileEdit = new PopupWithForm('.popup-profile', (data) => {
  const { name, job } = data
  popupProfileEdit.showLoading(true);
  api.editProfile(name, job)
   .then(data => {
    userInfo.setUserInfo(data);
    popupProfileEdit.close();
   })
     .catch((err) => console.log(err))
     .finally(() => popupProfileEdit.showLoading(false));
});

popupProfileEdit.setEventListeners();


// popup OverlayPhoto добавляем новое фото и подпись
const popupAddPhoto = new PopupWithForm('.popup-add-photo', (cardData) => {
 popupAddPhoto.showLoading(true);
  const { name, link } = cardData          //сначала собираем из формы инфо и посылаем на сервер
  api.addCard(name, link)
    .then(newCardData => {
      const card = createNewCard(newCardData); //потом, когда вернется, присваиваются данные и создается новая карточка
      newSection.addItem(card);                //метод добавляет карточку в разметку
      popupAddPhoto.close();
      photoAddValidator.deactivateButton();
    })
     .catch((err) => console.log(err))
     .finally(() => popupAddPhoto.showLoading(false));
});

popupAddPhoto.setEventListeners();

//popup Lightbox создаем экземпдяр попапа с фото
const popupLightbox = new PopupWithImage('.popup-photo');
popupLightbox.setEventListeners();

//popup Подтверждение удаления карточки
const popupConfirmDelete = new PopupWithConfirm('.popup-confirm-del');

popupConfirmDelete.setEventListeners(); //проставляем слушатель на попап подтверждения удаления

//popup Смены Аватара
const popupProfilePicture = new PopupWithForm('.popup-change-avatar',
  (data) => {
    popupProfilePicture.showLoading(true);
      api.updateProfilePicture(data)
        .then(userData => {
        userInfo.setUserInfo(userData);
        popupProfilePicture.close();
    })
         .catch((err) => console.log(err))
         .finally(() => popupProfilePicture.showLoading(false));
    })

popupProfilePicture.setEventListeners();  //проставляем слушатель на попап аватара

// Функция создания карточек
const createNewCard = (cardData) => {
  const card = new Card(cardData, '.card-template',
  (name, link) => { popupLightbox.open(name, link)
  },
  (id) => {
    popupConfirmDelete.open();
    popupConfirmDelete.changeSubmitHandlers(() => {
      popupConfirmDelete.showLoading(true);
      api.deleteCard(id)
  .then(res => {
    card.deleteThisCard()
    popupConfirmDelete.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupConfirmDelete.showLoading(false))
  });
},
(id) => {
  if(card.isLiked()) {
    api.deleteLike(id)
    .then(data => {
      card.setLikes(data.likes)
    })
    .catch((err) => console.log(err))
  }
  else {
    api.addLike(id)
    .then(data => {
      card.setLikes(data.likes)
    })
    .catch((err) => console.log(err))
  }
},
userId,
)
return card.createCard()
}

// Слушатель кнопки открытия редактирования аватара
buttonAvatarEditing.addEventListener('click', () => {
  avatarValidator.resetErrors();
  popupProfilePicture.open();
});

// Слушатель кнопки открытия редактирования профиля
buttonProfileEditing.addEventListener('click', () => {
  popupProfileEdit.setInputValues(userInfo.getUserInfo());
  profileValidator.deactivateButton();
  profileValidator.resetErrors();
  popupProfileEdit.open();
});

// Слушатель кнопки открытия добавления фото
 buttonPicAddition.addEventListener('click', () => {
   photoAddValidator.resetErrors();
   popupAddPhoto.open();
 });

