const popupOverlay = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let newName = document.querySelector('.popup__input_type_name');
let newJob = document.querySelector('.popup__input_type_job')

function takeInfo () {
  newName.value = profileName.textContent;
  newJob.value = profileJob.textContent;
}

function openPopup () {
  popupOverlay.classList.add('popup_opened');
}

function closePopup () {
  popupOverlay.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', openPopup, takeInfo);

closePopupButton.addEventListener('click', closePopup);


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = newName.value;
  profileJob.textContent = newJob.value;
  closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler);

