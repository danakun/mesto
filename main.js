/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._headers = headers;
    this._baseUrl = baseUrl;
  }
  _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.status);
      }).catch(console.log);
    }

    // другие методы работы с API
  }, {
    key: "getUserProfile",
    value: function getUserProfile() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.status);
      }).catch(console.log);
    }
  }, {
    key: "editProfile",
    value: function editProfile(name, about) {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.status);
      }).catch(console.log);
    }
  }, {
    key: "addCard",
    value: function addCard(name, link) {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.status);
      }).catch(console.log);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(id), {
        method: "DELETE",
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.status);
      }).catch(console.log);
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(id) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(id, "/likes"), {
        method: "DELETE",
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.status);
      }).catch(console.log);
    }
  }, {
    key: "addLike",
    value: function addLike(id) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(id, "/likes"), {
        method: "PUT",
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.status);
      }).catch(console.log);
    }
  }, {
    key: "updateProfilePicture",
    value: function updateProfilePicture(avatar) {
      return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.status);
      }).catch(console.log);
    }
  }]);
  return Api;
}();
var api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: 'e95edce0-fc31-46d4-a095-2c86db687d23',
    'Content-Type': 'application/json'
  }
});

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Card = /*#__PURE__*/function () {
  function Card(cardData, templateSelector, handlePhotoClick, handleDeleteClick, handleLikeClick) {
    var _this = this;
    _classCallCheck(this, Card);
    _defineProperty(this, "deleteThisCard", function () {
      _this._element.remove();
      _this._element = null;
    });
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._id = cardData.id;
    this._userId = cardData.userId;
    this._ownerId = cardData.ownerId;
    this._handlePhotoClick = handlePhotoClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  // метод обработки клика по кнопке удаления
  _createClass(Card, [{
    key: "_activateLike",
    value:
    // метод обработки клика по кнопке лайка
    // _handleLikeCard = () => {
    //   this._buttonLike.classList.toggle('photo-grid__like_active');
    // }

    function _activateLike() {
      this._buttonLike.classList.add('photo-grid__like_active');
    }
  }, {
    key: "_deactivateLike",
    value: function _deactivateLike() {
      this._buttonLike.classList.remove('photo-grid__like_active');
    }

    // ставим слушатели на все кнопку лайка и удаления, и на картинку
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._buttonDelete = this._element.querySelector('.photo-grid__delete');
      this._buttonLike = this._element.querySelector('.photo-grid__like');
      this._cardImage.addEventListener('click', function () {
        return _this2._handlePhotoClick(_this2._name, _this2._link);
      });
      this._buttonLike.addEventListener('click', function () {
        return _this2._handleLikeClick(_this2._id);
      });
      this._buttonDelete.addEventListener('click', function () {
        return _this2._handleDeleteClick(_this2._id);
      });
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this3 = this;
      var userLikeApplied = this._likes.find(function (user) {
        return user._id === _this3._userId;
      });
      return userLikeApplied;
    }

    // метод простановки лайков на счетчике
  }, {
    key: "setLikes",
    value: function setLikes(newLikes) {
      this._likes = newLikes;
      var likeCounter = this._element.querySelector('.photo-grid__like-counter');
      likeCounter.textContent = this._likes.length;

      // Проверяем, пролайкал ли юзер карточку и закрашиваем сердечко
      if (this.isLiked()) {
        this._activateLike();
      } else {
        this._deactivateLike();
      }
    }

    // метод вызова темплейта для новой карточки
  }, {
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector('.photo-grid__element').cloneNode(true);

      // вернём DOM-элемент карточки
      return cardElement;
    }

    // метод создания новой карточки
  }, {
    key: "createCard",
    value: function createCard() {
      this._element = this._getTemplate();
      this._cardTitle = this._element.querySelector('.photo-grid__text');
      this._cardImage = this._element.querySelector('.photo-grid__image');
      this._buttonDelete = this._element.querySelector('.photo-grid__delete');
      this._cardImage.src = this._link; // Говорим, что источник равен параметру link
      this._cardImage.alt = this._name; // Говорим, что название равно параметру name
      this._cardTitle.textContent = this._name; // Говорим, что текст из переменной cardTitle равно параметру name

      this._setEventListeners(); // Ставим слушатели
      this.setLikes(this._likes); // Ставим счетсчик лайков
      if (this._ownerId !== this._userId) {
        // Проверяем, кто оунер, чтобы поставить корзинку удаления
        this._buttonDelete.style.display = 'none';
        this._buttonDelete = null;
      }
      ;
      return this._element;
    }
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(validationSelectors, form) {
    _classCallCheck(this, FormValidator);
    this._validationSelectors = validationSelectors;
    this._form = form;
    this._inputSelector = this._validationSelectors.inputSelector;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector)); //_validationSelectors.inputSelector
    this._submitButtonSelector = validationSelectors.submitButtonSelector;
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  // метод проверки валидности
  _createClass(FormValidator, [{
    key: "_isValid",
    value: function _isValid(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }

    // Функция, показывающая ошибку
  }, {
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var _this$_validationSele = this._validationSelectors,
        inputErrorClass = _this$_validationSele.inputErrorClass,
        errorClass = _this$_validationSele.errorClass;
      var errorElement = this._form.querySelector(".".concat(inputElement.id, "-error")); // Находим элемент ошибки внутри самой функции
      inputElement.classList.add(inputErrorClass); // Добавляем классы, используя ключи из объкта
      errorElement.classList.add(errorClass);
      errorElement.textContent = errorMessage; // Присваеваем errorMessage тексту errorElement
    }
  }, {
    key: "_hideInputError",
    value:
    // метод скрывающий ошибку
    function _hideInputError(inputElement) {
      var _this$_validationSele2 = this._validationSelectors,
        inputErrorClass = _this$_validationSele2.inputErrorClass,
        errorClass = _this$_validationSele2.errorClass;
      var errorElement = this._form.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.remove(inputErrorClass); // Убираем присвоенные классы и значение errorElement
      errorElement.classList.remove(errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_hasInvalidInput",
    value:
    // Функция, проверяющая на наличие невалидного инпута
    function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }

    // деактивации кнопки
  }, {
    key: "deactivateButton",
    value: function deactivateButton() {
      this._buttonElement.classList.add(this._validationSelectors.inactiveButtonClass); // Добавляем класс
      this._buttonElement.disabled = true; // Добавляем disabled
    }

    // активации кнопки
  }, {
    key: "_activateButton",
    value: function _activateButton() {
      this._buttonElement.classList.remove(this._validationSelectors.inactiveButtonClass); // Снимаем класс
      this._buttonElement.disabled = false; // убираем disabled
    }

    // Функция, переключающая состояние кнопки
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      // Прописываем условие, используя функцию hasInvalidInput
      if (this._hasInvalidInput()) {
        this.deactivateButton();
      } else {
        this._activateButton();
      }
    }

    // метод сброса ошибок для повторного откытия формы
  }, {
    key: "resetErrors",
    value: function resetErrors() {
      var _this = this;
      this._inputList.forEach(function (inputElement) {
        _this._hideInputError(inputElement);
      });
    }

    // метод проставки слушателей
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._toggleButtonState();
      // Обойдём все элементы полученной коллекции
      this._inputList.forEach(function (inputElement) {
        // каждому полю добавим обработчик события input
        inputElement.addEventListener('input', function () {
          // Внутри колбэка вызовем isValid и toggleButtonState
          _this2._isValid(inputElement);
          _this2._toggleButtonState();
        });
      });
    }

    // публичный метод для валидации
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }]);
  return FormValidator;
}();


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // метод открытия попапа
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value:
    // метод закрытия попапа
    function close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value:
    // метод закрытия по нажатию на esc
    function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
      ;
    }
  }, {
    key: "setEventListeners",
    value:
    // метод устанавливает слушатели, проверяя, присутствует ли кнопка закрытия или оверлей, и закрывает его по клику
    function setEventListeners() {
      var _this = this;
      this._popup.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close')) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithConfirm.js":
/*!********************************************!*\
  !*** ./src/components/PopupWithConfirm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithConfirm)
/* harmony export */ });
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirm, _Popup);
  var _super = _createSuper(PopupWithConfirm);
  function PopupWithConfirm(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithConfirm);
    _this = _super.call(this, popupSelector);
    _this._confirmButton = _this._popup.querySelector('.popup__save-button');
    _this._form = _this._popup.querySelector('.popup__form');
    return _this;
  }
  _createClass(PopupWithConfirm, [{
    key: "showLoading",
    value:
    // публичный метод изменения текста при лоадинге после нажатия кнопки
    function showLoading(loading) {
      if (loading) {
        this._confirmButton.textContent = "Удаление...";
      } else {
        this._confirmButton.textContent = "Да";
      }
    }

    // публичный метод задания колбека для слушателя кнопки
  }, {
    key: "changeSubmitHandlers",
    value: function changeSubmitHandlers(newSubmitHandler) {
      this._handleFormSubmit = newSubmitHandler;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      // наследует логику родителя и обрабатывает также сабмит формы
      _get(_getPrototypeOf(PopupWithConfirm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (event) {
        event.preventDefault();
        _this2._handleFormSubmit();
        //this.close();
      });
    }

    //   close() {
    // // сбрасывает форму и потом выполняет логику родительского класса
    //     this._form.reset();
    //     super.close();
    //   }
  }]);
  return PopupWithConfirm;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._form = _this._popup.querySelector('.popup__form');
    _this._inputList = _this._form.querySelectorAll('.popup__input');
    _this._submitButton = _this._form.querySelector('.popup__save-button');
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "showLoading",
    value:
    // публичный метод изменения текста при лоадинге после нажатия кнопки
    function showLoading(loading) {
      if (loading) {
        this._submitButton.textContent = "Сохранение...";
      } else {
        this._submitButton.textContent = "Сохранить";
      }
    }

    // собирает данные всех полей формы
  }, {
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._inputsValues = {};
      this._inputList.forEach(function (input) {
        _this2._inputsValues[input.name] = input.value;
      });
      return this._inputsValues;
    }

    // вставляет данные в импуты формы
  }, {
    key: "setInputValues",
    value: function setInputValues(data) {
      this._inputList.forEach(function (input) {
        input.value = data[input.name];
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      // наследует логику родителя и обрабатывает также сабмит формы
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (event) {
        event.preventDefault();
        _this3._handleFormSubmit(_this3._getInputValues());
        _this3.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      // сбрасывает форму и потом выполняет логику родительского класса
      this._form.reset();
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);
  return PopupWithForm;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._lightboxPhoto = _this._popup.querySelector('.popup__photo');
    _this._lightboxPhotoCaption = _this._popup.querySelector('.popup__caption');
    return _this;
  }
  // Функция фото в лайтбокс-попапе
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      this._lightboxPhoto.src = link;
      this._lightboxPhoto.alt = name;
      this._lightboxPhotoCaption.textContent = name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this.container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      //попадает готовая разметка
      //публичный метод принимает элемент и добавляет его в разметку
      this.container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      //публичный метод проходит циклом forEach по всем (initial) items и рендерит элементы
      // использует renderer
      this._items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileNameSelector = _ref.profileNameSelector,
      profileJobSelector = _ref.profileJobSelector,
      profilePictureSelector = _ref.profilePictureSelector;
    _classCallCheck(this, UserInfo);
    this._name = document.querySelector(profileNameSelector);
    this._job = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(profilePictureSelector);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      //возвращает объект с данными пользователя, используется при открытие попапа
      return {
        name: this._name.textContent,
        job: this._job.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(user) {
      //принимает новые данные пользователя и добавляет их на страницу
      this._name.textContent = user.name;
      this._job.textContent = user.job;
      this._avatar.src = user.avatar; //dopilit tut!!!!!!
    }
  }]);
  return UserInfo;
}(); // export default class UserInfo {
//   constructor({ profileNameSelector, profileJobSelector }) {
// this._name = profileNameSelector;
// this._job = profileJobSelector;
// this._nameInput = document.querySelector(this._name);
// this._jobInput = document.querySelector(this._job);
//   }
//   getUserInfo(profileName, profileJob) {
// //возвращает объект с данными пользователя, используется при открытие попапа
//  this._nameInput.value = profileName.textContent ;
//  this._jobInput.value = profileJob.textContent;
//  console.log(this._nameInput.value);
//  console.log(this._jobInput.value);
//   }
//     //  newName.value = profileName.textContent;
//     //  newJob.value = profileJob.textContent;
//   setUserInfo(profileName, profileJob) {
//     //принимает новые данные пользователя и добавляет их на страницу
//     profileName.textContent = this._nameInput.value;
//     profileJob.textContent = this._jobInput.value;
//     console.log(this._nameInput.value);
//     console.log(this._jobInput.value);
//   }
// }


/***/ }),

/***/ "./src/utils/cards.js":
/*!****************************!*\
  !*** ./src/utils/cards.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards)
/* harmony export */ });
// Дефолтные карточки в массиве

var moscow = new URL(/* asset import */ __webpack_require__(/*! ../images/moscow.jpg */ "./src/images/moscow.jpg"), __webpack_require__.b);
var spb = new URL(/* asset import */ __webpack_require__(/*! ../images/spb.jpg */ "./src/images/spb.jpg"), __webpack_require__.b);
var ural = new URL(/* asset import */ __webpack_require__(/*! ../images/ural.jpg */ "./src/images/ural.jpg"), __webpack_require__.b);
var karelia = new URL(/* asset import */ __webpack_require__(/*! ../images/karelia.jpg */ "./src/images/karelia.jpg"), __webpack_require__.b);
var elbrus = new URL(/* asset import */ __webpack_require__(/*! ../images/elbrus.jpg */ "./src/images/elbrus.jpg"), __webpack_require__.b);
var finskizaliv = new URL(/* asset import */ __webpack_require__(/*! ../images/finskizaliv.jpg */ "./src/images/finskizaliv.jpg"), __webpack_require__.b);
var initialCards = [{
  name: 'Москва',
  link: moscow
}, {
  name: 'Урал',
  link: ural
}, {
  name: 'Санкт-Петербург',
  link: spb
}, {
  name: 'Карелия',
  link: karelia
}, {
  name: 'Эльбрус',
  link: elbrus
}, {
  name: 'Финский Залив',
  link: finskizaliv
}];

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "avatar": () => (/* binding */ avatar),
/* harmony export */   "avatarForm": () => (/* binding */ avatarForm),
/* harmony export */   "buttonAvatarEditing": () => (/* binding */ buttonAvatarEditing),
/* harmony export */   "buttonPicAddition": () => (/* binding */ buttonPicAddition),
/* harmony export */   "buttonProfileEditing": () => (/* binding */ buttonProfileEditing),
/* harmony export */   "photoForm": () => (/* binding */ photoForm),
/* harmony export */   "popupChangeAvatar": () => (/* binding */ popupChangeAvatar),
/* harmony export */   "popupOverlayPhoto": () => (/* binding */ popupOverlayPhoto),
/* harmony export */   "popupProfileOverlay": () => (/* binding */ popupProfileOverlay),
/* harmony export */   "profileForm": () => (/* binding */ profileForm),
/* harmony export */   "validationObject": () => (/* binding */ validationObject)
/* harmony export */ });
// Объект валидации с настройками
var validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

// Переменные для попапов
var popupProfileOverlay = document.querySelector('.popup-profile');
var popupOverlayPhoto = document.querySelector('.popup-add-photo');
var popupChangeAvatar = document.querySelector('.popup-change-avatar');

// Переменные для кнопок открытия попапов
var buttonProfileEditing = document.querySelector('.profile__edit-button');
var buttonPicAddition = document.querySelector(".profile__add-button");
var buttonAvatarEditing = document.querySelector('.profile__change-avatar-button');

// Переменные для форм попапа
var profileForm = popupProfileOverlay.querySelector('.popup__form');
var photoForm = popupOverlayPhoto.querySelector('.popup__form');
var avatarForm = popupChangeAvatar.querySelector('.popup__form');
var avatar = document.querySelector('.profile__change-avatar-button');


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/elbrus.jpg":
/*!*******************************!*\
  !*** ./src/images/elbrus.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ba0acb36ac9ebd1f4a1.jpg";

/***/ }),

/***/ "./src/images/finskizaliv.jpg":
/*!************************************!*\
  !*** ./src/images/finskizaliv.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d89f3b33e199fc13127a.jpg";

/***/ }),

/***/ "./src/images/karelia.jpg":
/*!********************************!*\
  !*** ./src/images/karelia.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cfd703d4e49bbdfe0e6.jpg";

/***/ }),

/***/ "./src/images/moscow.jpg":
/*!*******************************!*\
  !*** ./src/images/moscow.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e4c935dac44af143a6b.jpg";

/***/ }),

/***/ "./src/images/spb.jpg":
/*!****************************!*\
  !*** ./src/images/spb.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f25b71c147c8f1254ed8.jpg";

/***/ }),

/***/ "./src/images/ural.jpg":
/*!*****************************!*\
  !*** ./src/images/ural.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "469d401f6c1af01a07d1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _utils_cards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/cards.js */ "./src/utils/cards.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithConfirm.js */ "./src/components/PopupWithConfirm.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");











var userId;
_components_Api_js__WEBPACK_IMPORTED_MODULE_10__.api.getUserProfile().then(function (res) {
  // console.log('responce', res)
  var newRes = {
    name: res.name,
    job: res.about
  };
  userInfo.setUserInfo(newRes);
  userId = res._id;
});
_components_Api_js__WEBPACK_IMPORTED_MODULE_10__.api.getInitialCards().then(function (cardList) {
  cardList.forEach(function (cardData) {
    var card = createNewCard({
      name: cardData.name,
      link: cardData.link,
      likes: cardData.likes,
      id: cardData._id,
      userId: userId,
      ownerId: cardData.owner._id
    });
    newSection.addItem(card);
  });
});

// Функция создания секции карточек по новому заданию

var newSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  items: [],
  //initialCards
  renderer: function renderer(cardData) {
    var card = createNewCard({
      name: cardData.name,
      link: cardData.link,
      likes: cardData.likes,
      id: cardData._id,
      userId: userId,
      ownerId: cardData.owner._id
    });
    newSection.addItem(card);
  }
}, '.photo-grid');

// Функция создания карточек
var createNewCard = function createNewCard(cardData) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](cardData, '.card-template', function (name, link) {
    popupLightbox.open(name, link);
  }, function (id) {
    popupConfirmDelete.open();
    popupConfirmDelete.changeSubmitHandlers(function () {
      _components_Api_js__WEBPACK_IMPORTED_MODULE_10__.api.deleteCard(id).then(function (res) {
        card.deleteThisCard();
        popupConfirmDelete.close();
        //console.log(res)
      });
    });
  }, function (id) {
    if (card.isLiked()) {
      _components_Api_js__WEBPACK_IMPORTED_MODULE_10__.api.deleteLike(id).then(function (res) {
        card.setLikes(res.likes);
      });
    } else {
      _components_Api_js__WEBPACK_IMPORTED_MODULE_10__.api.addLike(id).then(function (res) {
        card.setLikes(res.likes);
      });
    }
  });
  return card.createCard();
};

// Рендер начальных карточек с использованием публичного метода из класса Section
newSection.renderItems();

// Объявляем по отдельности валидаторы для необходимых форм
var profileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationObject, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileForm);
var photoAddValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationObject, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.photoForm);
var avatarValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationObject, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.avatarForm);

// Запускаем валидацию
profileValidator.enableValidation();
photoAddValidator.enableValidation();
avatarValidator.enableValidation();

// userInfo создаем экземпляр класса инфо профиля
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
  profilePictureSelector: '.profile__change-avatar-button'
});

// popup ProfileOverlay редактируем профиль
var popupProfileEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup-profile', function (values) {
  var name = values.name,
    job = values.job;
  _components_Api_js__WEBPACK_IMPORTED_MODULE_10__.api.editProfile(name, job).then(function (res) {
    console.log('res', res);
    userInfo.setUserInfo(values);
    popupProfileEdit.close();
  });
});
popupProfileEdit.setEventListeners();

// popup OverlayPhoto добавляем новое фото и подпись
var popupAddPhoto = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup-add-photo', function (cardData) {
  //const card = createNewCard(cardData);
  var name = cardData.name,
    link = cardData.link;
  _components_Api_js__WEBPACK_IMPORTED_MODULE_10__.api.addCard(name, link).then(function (newCardData) {
    var card = createNewCard({
      name: newCardData.name,
      link: newCardData.link,
      likes: newCardData.likes,
      id: newCardData._id,
      userId: userId,
      ownerId: newCardData.owner._id
    });
    newSection.addItem(card);
    popupAddPhoto.close();
    photoAddValidator.deactivateButton();
  });
});
popupAddPhoto.setEventListeners();

//popup Lightbox создаем экземпдяр попапа с фото
var popupLightbox = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup-photo');
popupLightbox.setEventListeners();

//popup Подтверждение удаления карточки
var popupConfirmDelete = new _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup-confirm-del');
// () => {
//   api.deleteCard(id)
//   .then(res => {
//     card.deleteThisCard()
//     popupConfirmDelete.close()
//     console.log(res)
//   })
// }
popupConfirmDelete.setEventListeners(); //проставляем слушатель на попап подтверждения удаления

//popup Смены Аватара

// const popupProfilePicture = new PopupWithForm('.popup-change-avatar',
// api.updateProfilePicture(avatar)
//   .then(res => {
//     console.log('res eto', res)
//     userInfo.setUserInfo(res.name, res.about, res.avatar);
//     popupProfilePicture.close()
//   })
// )

//dopisat func suda!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const popupProfileEdit = new PopupWithForm('.popup-profile', (values) => {
//   const { name, job } = values
//   api.editProfile(name, job)
//    .then(res => {
//     console.log('res', res);
//     userInfo.setUserInfo(values);
//     popupProfileEdit.close();
//    })
// });

var popupProfilePicture = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup-change-avatar', function (value) {
  _components_Api_js__WEBPACK_IMPORTED_MODULE_10__.api.updateProfilePicture(value).then(function (res) {
    userInfo.setUserInfo(res);
    popupProfilePicture.close();
  });
});
popupProfilePicture.setEventListeners(); //проставляем слушатель на попап аватара

// Слушатель кнопки открытия редактирования аватара
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.buttonAvatarEditing.addEventListener('click', function () {
  avatarValidator.resetErrors();
  popupProfilePicture.open();
}); // dodelat!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Слушатель кнопки открытия редактирования профиля
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.buttonProfileEditing.addEventListener('click', function () {
  popupProfileEdit.setInputValues(userInfo.getUserInfo());
  profileValidator.deactivateButton();
  profileValidator.resetErrors();
  popupProfileEdit.open();
});

// Слушатель кнопки открытия добавления фото
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.buttonPicAddition.addEventListener('click', function () {
  photoAddValidator.resetErrors();
  popupAddPhoto.open();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map