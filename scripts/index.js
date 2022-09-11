const popupOverlay = document.querySelector('.popup');

const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close');

const popupForm = document.querySelector('.popup-window__form');
//const saveButton = document.querySelector('.popup-window__save-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let newName = document.querySelector('.popup-window__input_type_name');
let newJob = document.querySelector('.popup-window__input_type_job')


openPopupButton.addEventListener('click', () => {
  popupOverlay.classList.add('popup_opened');
  newName.value = profileName.textContent;
  newJob.value = profileJob.textContent;
})

closePopupButton.addEventListener('click', () => {
  popupOverlay.classList.remove('popup_opened');
})

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = newName.value;
  profileJob.textContent = newJob.value;
  popupOverlay.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', formSubmitHandler);




