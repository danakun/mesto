const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupProfileOverlay = document.querySelector('.popup-profile');
const popupOverlayPhoto = document.querySelector('.popup-add-photo');

const openPopupButton = document.querySelector('.profile__edit-button');
const addPicButton = document.querySelector(".profile__add-button");

const closeProfilePopupButton = document.querySelector('.close-profile');
const closeAddPhotoPopupButton = document.querySelector('.close-add-photo');

const popupForm = document.querySelector('.profile-form');
const photoForm = document.querySelector('.add-photo-form')
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let newName = document.querySelector('.popup__input_type_name');
let newJob = document.querySelector('.popup__input_type_job')

const cardTemplate = document.querySelector('.card-template').content;
const photoList = document.querySelector(".photo-grid");


const newTitle = document.querySelector('.popup__input_type_title');
const newPhoto = document.querySelector('.popup__input_type_photo')
<<<<<<< HEAD
=======
// Переменные для фото и подписи из лайтбокса
const lightboxPhoto = document.querySelector('.popup__photo')
const lightboxPhotoCaption = document.querySelector('.popup__caption')
>>>>>>> main

// Функция создания карточки и добавления "слушателей" ее элементам
function createCard(name, link) {
  const cardElement = cardTemplate.querySelector(".photo-grid__element").cloneNode(true); // Копируем темплейт
  const cardTitle = cardElement.querySelector(".photo-grid__text"); // Объявляем переменную названию
  const cardImage = cardElement.querySelector(".photo-grid__image"); // Объявляем переменную картинке
  const likeButton = cardElement.querySelector(".photo-grid__like"); // Объявляем переменную лайку
  likeButton.addEventListener("click", () => toggleLike(likeButton)); // Вешаем слушатель на кнопку лайка
  const deleteButton = cardElement.querySelector(".photo-grid__delete"); // Объявляем переменную урне
  deleteButton.addEventListener("click", () => deleteCard(deleteButton)); // Вешаем слушатель на кнопку удаления
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
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// Функция передачи данных с формы в профиль
function profileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = newName.value;
  profileJob.textContent = newJob.value;
  closePopup(popupProfileOverlay);
}

// Обработчик формы добавления элемента с фото
function PhotoFormSubmitHandler(evt) {
  evt.preventDefault();
  photoList.prepend(createCard(newTitle.value, newPhoto.value));
  evt.target.reset();
  closePopup(popupOverlayPhoto);
}

// Слушатель кнопки открытия редактирования профиля
openPopupButton.addEventListener('click', () => {
  openPopup(popupProfileOverlay);
  takeInfo();
 });

// Слушатель кнопки открытия добавления фото
 addPicButton.addEventListener('click', () => {
   openPopup(popupOverlayPhoto);
 });

// Закрытие профайл попапа
closeProfilePopupButton.addEventListener('click', () => {
  closePopup(popupProfileOverlay);
});
// Закрытие новое место попапа
closeAddPhotoPopupButton.addEventListener('click', () => {
  closePopup(popupOverlayPhoto);
});

// Слушатель кнопки создать профиль
popupForm.addEventListener('submit', profileFormSubmitHandler);


// "Слушатель" формы добавления элемента
photoForm.addEventListener("submit", PhotoFormSubmitHandler);

