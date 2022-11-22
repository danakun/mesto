export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
this._name = profileNameSelector;
this._job = profileJobSelector;
this._nameInput = document.querySelector(this._name);
this._jobInput = document.querySelector(this._job);

  }
  getUserInfo(profileName, profileJob) {
//возвращает объект с данными пользователя, используется при открытие попапа
 this._nameInput.value = profileName.textContent ;
 this._jobInput.value = profileJob.textContent;
 console.log(this._nameInput.value);
 console.log(this._jobInput.value);
  }
    //  newName.value = profileName.textContent;
    //  newJob.value = profileJob.textContent;

  setUserInfo(profileName, profileJob) {
    //принимает новые данные пользователя и добавляет их на страницу
    profileName.textContent = this._nameInput.value;
    profileJob.textContent = this._jobInput.value;
    console.log(this._nameInput.value);
    console.log(this._jobInput.value);
  }
}
