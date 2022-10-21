// Переменные для трех попапов
const popupProfileOverlay = document.querySelector('.popup-profile');
const popupOverlayPhoto = document.querySelector('.popup-add-photo');
const popupLightbox = document.querySelector('.popup-photo')
const popups = document.querySelectorAll(".popup");
// Переменные для кнопок открытия попапов
const buttonProfileEditing = document.querySelector('.profile__edit-button');
const buttonPicAddition = document.querySelector(".profile__add-button");
// Переменные для кнопок закрытия попапов !!!!
const closureProfilePopupButton = document.querySelector('.close-profile');
const closureAddPhotoPopupButton = document.querySelector('.close-add-photo');
const closureLightboxButton = document.querySelector('.close-photo')
// Переменная на все кнопки закрытия попапов
const closurePopupButtons = document.querySelector('.popup__close');
// Переменные для форм попапа
const popupForm = document.querySelector('.profile-form');
const photoForm = document.querySelector('.add-photo-form')
// Переменные для инфо в профиле сайта
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
// Переменные для инпутов попапа профиль
const newName = document.querySelector('.popup__input_type_name');
const newJob = document.querySelector('.popup__input_type_job')
// Переменные для карточки и их массива
const cardTemplate = document.querySelector('.card-template').content;
const photoList = document.querySelector(".photo-grid");

const newTitle = document.querySelector('.popup__input_type_title');
const newPhoto = document.querySelector('.popup__input_type_photo')

// Переменные для фото и подписи из лайтбокса
const lightboxPhoto = document.querySelector('.popup__photo')
const lightboxPhotoCaption = document.querySelector('.popup__caption')

// Функция создания карточки и добавления "слушателей" ее элементам
function createCard(name, link) {
  const cardElement = cardTemplate.querySelector(".photo-grid__element").cloneNode(true); // Копируем темплейт
  const cardTitle = cardElement.querySelector(".photo-grid__text"); // Объявляем переменную названию
  const cardImage = cardElement.querySelector(".photo-grid__image"); // Объявляем переменную картинке
  const likeButton = cardElement.querySelector(".photo-grid__like"); // Объявляем переменную лайку
  likeButton.addEventListener("click", () => toggleLike(likeButton)); // Вешаем слушатель на кнопку лайка
  const buttonDelete = cardElement.querySelector(".photo-grid__delete"); // Объявляем переменную урне
  buttonDelete.addEventListener("click", () => deleteCard(buttonDelete)); // Вешаем слушатель на кнопку удаления
  cardImage.src = link; // Говорим, что источник равен параметру link
  cardImage.alt = name; // Говорим, что название равно параметру name
  cardTitle.textContent = name; // Говорим, что текст из переменной cardTitle равно параметру name
  cardImage.addEventListener("click", () => openLightbox(link, name)); //Вешаем слушатель на карточку для открытия фото
  return cardElement; //Возвращаем элемент карточки
}

// Функция переключения лайка
function toggleLike(button) {
  button.classList.toggle("photo-grid__like_active");
}

// Функция удаления карточки
function deleteCard(button) {
  const cardItem = button.closest(".photo-grid__element");
  cardItem.remove();
}

// Функция отрисовки массива карточек
function renderCards(array) {
  array.forEach((el) => {
    photoList.append(createCard(el.name, el.link));
  });
}

renderCards(initialCards);


// Функция принятия значения в профиль из импута
function takeInfo () {
  newName.value = profileName.textContent;
  newJob.value = profileJob.textContent;
}


// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', handleEscUp);
 }


// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', handleEscUp);  // удаляем событие keydown
}

// Функция закрытия по esc
function handleEscUp(evt) { // узнаем в каком месте произошел клик:
  if (evt.key === "Escape") {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
 };

// Функция фото в лайтбокс-попапе
function openLightbox(link, name) {
  openPopup(popupLightbox);
  lightboxPhoto.src = link;
  lightboxPhoto.alt = name;
  lightboxPhotoCaption.textContent = name;
}

// Функция передачи данных с формы в профиль
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = newName.value;
  profileJob.textContent = newJob.value;
  closePopup(popupProfileOverlay);
}


// Обработчик формы добавления элемента с фото
function handlePhotoFormSubmit(evt) {
  evt.preventDefault();
  photoList.prepend(createCard(newTitle.value, newPhoto.value));
  evt.target.reset();
  // деактивируем кнопку submit для предотвращения добавления пустой карточки
  const currentButton = popupOverlayPhoto.querySelector(validationObject.submitButtonSelector);
  deactivateButton(currentButton, validationObject)
  closePopup(popupOverlayPhoto);
}


// Слушатель кнопки открытия редактирования профиля
buttonProfileEditing.addEventListener('click', () => {
  openPopup(popupProfileOverlay);
  takeInfo();
  const inputElement = popupProfileOverlay.querySelector(validationObject.inputSelector);
  const formElement = popupProfileOverlay.querySelector(validationObject.formSelector);
  resetErrors(formElement, inputElement, validationObject);
});


const currentButton = popupOverlayPhoto.querySelector(validationObject.submitButtonSelector);


// Слушатель кнопки открытия добавления фото
 buttonPicAddition.addEventListener('click', () => {
   openPopup(popupOverlayPhoto);
 });

 // Функция клика по кнопке и по оверлей
function handleClickOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
  closePopup(evt.target);
}
}

// Слушатели закрытия попапов по кликам на оверлей
popupProfileOverlay.addEventListener('click', handleClickOverlay);
popupOverlayPhoto.addEventListener('click', handleClickOverlay);
popupLightbox.addEventListener('click', handleClickOverlay);


// Закрытие попапа по клику на кнопку
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
        // Закрываем попап только при клике по нужному элементу
      closePopup(popup);
}
});
});


// Слушатель кнопки создать профиль
popupForm.addEventListener('submit', handleProfileFormSubmit);


// "Слушатель" формы добавления элемента
photoForm.addEventListener("submit", handlePhotoFormSubmit);

