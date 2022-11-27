import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  };

  // собирает данные всех полей формы
  _getInputValues() {
    this._inputsValues = {};
        this._inputList.forEach((input) => {
          this._inputsValues[input.name] = input.value;
        });
        return this._inputsValues;
      }

  // вставляет данные в импуты формы
  setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    })
  }

  setEventListeners() {
// наследует логику родителя и обрабатывает также сабмит формы
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }


  close() {
// сбрасывает форму и потом выполняет логику родительского класса
    this._form.reset();
    super.close();
  }
}
