import "./index.css";

import  Card  from '../components/Card.js';
import  FormValidator  from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import  PopupWithImage  from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js'
import  Section  from '../components/Section.js';
import  UserInfo  from '../components/UserInfo.js';

import {
  validationObject,
  buttonProfileEditing,
  buttonPicAddition,
  buttonAvatarEditing,
  profileForm,
  photoForm,
  popupChangeAvatar,
  avatarForm,
} from '../utils/constants.js';
import { api } from '../components/Api.js'

let userId

api.getUserProfile()
.then(userData => {
  // console.log('responce', res)
  // const newRes = {
  //   name: userData.name,
  //   job: userData.about,
  //   avatar: userData.avatar
  // }
  userInfo.setUserInfo(userData)
  userId = userData._id;
  console.log(userData)
});

api.getInitialCards()
.then(cardList => {
  cardList.forEach(cardData => {
    const card = createNewCard(cardData);
    newSection.addItem(card);
  });
})

// Функция создания секции карточек по новому заданию

const newSection = new Section({
  items: [], //initialCards
    renderer: (cardData) => {
    const card = createNewCard( cardData
    //   {
    //   name: cardData.name,
    //   link: cardData.link,
    //   likes: cardData.likes,
    //   id: cardData._id,
    //   userId: userId,
    //   ownerId: cardData.owner._id
    // }
    );
    newSection.addItem(card);
    }
}, '.photo-grid'
);

// Функция создания карточек
const createNewCard = (cardData) => {
  const card = new Card(cardData, '.card-template',  (name, link) => { popupLightbox.open(name, link)
  },
  (id) => {
    popupConfirmDelete.open();
    popupConfirmDelete.changeSubmitHandlers(() => {
      popupConfirmDelete.showLoading(true);
      api.deleteCard(id)
  .then(res => {
    card.deleteThisCard()
    popupConfirmDelete.close()
    //console.log(res)
    })
    .catch((err) => console.log(err))
    .finally(() => popupConfirmDelete.showLoading(false))
  });
},
(id) => {
  if(card.isLiked()) {
    api.deleteLike(id)
    .then(res => {
      card.setLikes(res.likes)
    })
  }
  else {
    api.addLike(id)
    .then(res => {
      card.setLikes(res.likes)
    })
  }
},
userId,
)
return card.createCard()
}

// Рендер начальных карточек с использованием публичного метода из класса Section
newSection.renderItems()

// Объявляем по отдельности валидаторы для необходимых форм
const profileValidator = new FormValidator(validationObject, profileForm);
const photoAddValidator = new FormValidator(validationObject, photoForm);
const avatarValidator = new FormValidator(validationObject, avatarForm);

// Запускаем валидацию
profileValidator.enableValidation();
photoAddValidator.enableValidation();
avatarValidator.enableValidation();

// userInfo создаем экземпляр класса инфо профиля
const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
  profilePictureSelector: '.profile__change-avatar-button'
});

// popup ProfileOverlay редактируем профиль
const popupProfileEdit = new PopupWithForm('.popup-profile', (values) => {
  const { name, job } = values
  popupProfileEdit.showLoading(true);
  api.editProfile(name, job)
   .then(res => {
    console.log('res', res);
    userInfo.setUserInfo(values);
    popupProfileEdit.close();
   })
    .catch((err) => console.log(err))
    .finally(() => popupProfileEdit.showLoading(false));
});
popupProfileEdit.setEventListeners();


// popup OverlayPhoto добавляем новое фото и подпись
const popupAddPhoto = new PopupWithForm('.popup-add-photo', (cardData) => {
 popupAddPhoto.showLoading(true);
  const { name, link } = cardData
  api.addCard(name, link)
    .then(newCardData => {
      const card = createNewCard(
      //   {
      //   name: newCardData.name,
      //   link: newCardData.link,
      //   likes: newCardData.likes,
      //   id: newCardData._id,
      //   userId: userId,
      //   ownerId: newCardData.owner._id
      // }
      newCardData
      );
      newSection.addItem(card);
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
  (value) => {
    console.log(value)
    popupProfilePicture.showLoading(true);
      api.updateProfilePicture(value)
        .then(userData => {
          console.log(userData)
        userInfo.setUserInfo(userData);
        popupProfilePicture.close();
    })
        .catch((err) => console.log(err))
        .finally(() => popupProfilePicture.showLoading(false));
    })

popupProfilePicture.setEventListeners();  //проставляем слушатель на попап аватара

// const popupProfilePicture = new PopupWithForm('.popup-change-avatar',
// api.updateProfilePicture(avatar)
//   .then(res => {
//     console.log('res eto', res)
//     userInfo.setUserInfo(res.name, res.about, res.avatar);
//     popupProfilePicture.close()
//   })
// )

//dopisat func suda!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const popupProfileEdit = new PopupWithForm('.popup-profile', (values) => {
//   const { name, job } = values
//   api.editProfile(name, job)
//    .then(res => {
//     console.log('res', res);
//     userInfo.setUserInfo(values);
//     popupProfileEdit.close();
//    })
// });

// const popupProfilePicture = new PopupWithForm('.popup-change-avatar', (value) => {
//   api.updateProfilePicture(value)
//     .then(res => {
//     userInfo.setUserInfo(res);
//     popupProfilePicture.close();
//  })
// })


// Слушатель кнопки открытия редактирования аватара
buttonAvatarEditing.addEventListener('click', () => {
  avatarValidator.resetErrors()
  popupProfilePicture.open();
});  // dodelat!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

