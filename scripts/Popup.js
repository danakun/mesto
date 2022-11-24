export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  };

// метод открытия попапа
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

// метод закрытия попапа
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

// метод закрытия по нажатию на esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
        this.close();
      };
      };

// метод устанавливает слушатели, проверяя, присутствует ли кнопка закрытия или оверлей, и закрывает его по клику
  setEventListeners() {
this._popup.addEventListener('click', (event) => {
    if (
      event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close')
    )
      {
      this.close()
      }
    });
  }
}
