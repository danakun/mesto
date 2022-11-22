export class Card {
  constructor(cardData, templateSelector, handlePhotoClick) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._name = cardData.name;
    this._link = cardData.link;
    this._handlePhotoClick = handlePhotoClick;
  }

   // метод обработки клика по кнопке удаления
   _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  }

  // метод обработки клика по кнопке лайка
  _handleLikeCard = () => {
    this._buttonLike.classList.toggle('photo-grid__like_active');
  }

  // ставим слушатели на все кнопку лайка и удаления, и на картинку
  _setEventListeners() {
    this._buttonDelete = this._element.querySelector('.photo-grid__delete') ;
    this._buttonLike = this._element.querySelector('.photo-grid__like');
    this._cardImage.addEventListener('click', () =>  this._handlePhotoClick(this._name, this._link));
    this._buttonLike.addEventListener('click', this._handleLikeCard);
    this._buttonDelete.addEventListener('click',this._handleDeleteCard);
  }

  // метод вызова темплейта для новой карточки
  _getTemplate() {
    const cardElement = document
   .querySelector(this._templateSelector)
   .content
   .querySelector('.photo-grid__element')
   .cloneNode(true);

 // вернём DOM-элемент карточки
   return cardElement;
 }

  // метод создания новой карточки
  createCard() {
    this._element = this._getTemplate();

    this._cardTitle = this._element.querySelector('.photo-grid__text');
    this._cardImage = this._element.querySelector('.photo-grid__image');

    this._cardImage.src = this._link; // Говорим, что источник равен параметру link
    this._cardImage.alt = this._name; // Говорим, что название равно параметру name
    this._cardTitle.textContent = this._name; // Говорим, что текст из переменной cardTitle равно параметру name

    this._setEventListeners(); // Ставим слушатели

    return this._element;
  }

}
