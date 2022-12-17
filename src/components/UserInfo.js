export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profilePictureSelector }) {
this._name = document.querySelector(profileNameSelector);
this._job = document.querySelector(profileJobSelector);
this._avatar = document.querySelector(profilePictureSelector)
  }

  getUserInfo() {
//возвращает объект с данными пользователя, используется при открытие попапа
    return {
      name: this._name.textContent,
      job: this._job.textContent,}
  }

  setUserInfo(user) {
    //принимает новые данные пользователя и добавляет их на страницу
    this._name.textContent = user.name;
    this._job.textContent = user.about;
    this._avatar.style.backgroundImage = `url(${user.avatar})`;
  }
}

