export const popupLightbox = document.querySelector('.popup-photo');
// Переменные для фото и подписи из лайтбокса
export const lightboxPhoto = document.querySelector('.popup__photo')
export const lightboxPhotoCaption = document.querySelector('.popup__caption')



// Функция фото в лайтбокс-попапе
export function openLightbox(link, name) {
  openPopup(popupLightbox);
  lightboxPhoto.src = link;
  lightboxPhoto.alt = name;
  lightboxPhotoCaption.textContent = name;
}


// Функция открытия попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', handleEscUp);
 }

 // Функция закрытия попапа
 export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', handleEscUp);  // удаляем событие keydown
}

 // Функция закрытия по esc
 export function handleEscUp(evt) { // узнаем в каком месте произошел клик:
  if (evt.key === "Escape") {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
 };
