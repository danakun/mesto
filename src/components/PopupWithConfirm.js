import Popup from "../components/Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__save-button');
    this._form = this._popup.querySelector('.popup__form');
  };

// публичный метод изменения текста при лоадинге после нажатия кнопки
  showLoading(loading) {
    if (loading) {
      this._confirmButton.textContent = "Удаление...";
    }
      else {
      this._confirmButton.textContent = "Да";
    }
  }

  // публичный метод задания колбека для слушателя кнопки
  changeSubmitHandlers(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler
      }

  setEventListeners() {
// наследует логику родителя и обрабатывает также сабмит формы
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit();
      //this.close();
    });
  }


//   close() {
// // сбрасывает форму и потом выполняет логику родительского класса
//     this._form.reset();
//     super.close();
//   }


}
