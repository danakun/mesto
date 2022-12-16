export default class Card {
  constructor(cardData, templateSelector, handlePhotoClick, handleDeleteClick, handleLikeClick, userId) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._id = cardData._id;
    this._userId = userId;
    this._ownerId = cardData.owner._id
    this._handlePhotoClick = handlePhotoClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

   // метод обработки клика по кнопке удаления
   deleteThisCard = () => {
    this._element.remove();
    this._element = null;
  }

  // метод обработки клика по кнопке лайка
  // _handleLikeCard = () => {
  //   this._buttonLike.classList.toggle('photo-grid__like_active');
  // }

  _activateLike() {
    this._buttonLike.classList.add('photo-grid__like_active');
  }

  _deactivateLike() {
    this._buttonLike.classList.remove('photo-grid__like_active');
  }

  // ставим слушатели на все кнопку лайка и удаления, и на картинку
  _setEventListeners() {
    //this._buttonDelete = this._element.querySelector('.photo-grid__delete');
    //this._buttonLike = this._element.querySelector('.photo-grid__like');
    this._cardImage.addEventListener('click', () =>  this._handlePhotoClick(this._name, this._link));
    this._buttonLike.addEventListener('click', () => this._handleLikeClick(this._id));
    this._buttonDelete.addEventListener('click', () => this._handleDeleteClick(this._id));
  }

  isLiked() {
    const userLikeApplied = this._likes.find(user => user._id === this._userId)
    return userLikeApplied;
  }

  // метод простановки лайков на счетчике
  setLikes(newLikes) {
    this._likes = newLikes
    const likeCounter = this._element.querySelector('.photo-grid__like-counter');
    likeCounter.textContent = this._likes.length;

     // Проверяем, пролайкал ли юзер карточку и закрашиваем сердечко
    if(this.isLiked()) {
      this._activateLike()
    }
    else {
      this._deactivateLike()
    }
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
    this._buttonDelete = this._element.querySelector('.photo-grid__delete');
    this._buttonLike = this._element.querySelector('.photo-grid__like');

    this._cardImage.src = this._link; // Говорим, что источник равен параметру link
    this._cardImage.alt = this._name; // Говорим, что название равно параметру name
    this._cardTitle.textContent = this._name; // Говорим, что текст из переменной cardTitle равно параметру name

    this._setEventListeners(); // Ставим слушатели
    this.setLikes(this._likes); // Ставим счетсчик лайков
    if(this._ownerId !== this._userId) {   // Проверяем, кто оунер, чтобы поставить корзинку удаления
      //this._buttonDelete.style.display = 'none';
      this._buttonDelete = null;
    };

    return this._element;
  }

}


