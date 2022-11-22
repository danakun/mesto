import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._lightboxPhoto = this._popup.querySelector('.popup__photo');
    this._lightboxPhotoCaption = this._popup.querySelector('.popup__caption');
  }
  // Функция фото в лайтбокс-попапе
open(name, link)  {
  lightboxPhoto.src = link;
  lightboxPhoto.alt = name;
  lightboxPhotoCaption.textContent = name;
  super.open();
}
}
