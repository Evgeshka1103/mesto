export default class UserInfo {
   constructor({nameSelector, aboutSelector, avatarSelector}) {
      this._name = document.querySelector(nameSelector);
      this._about = document.querySelector(aboutSelector);
      this._avatar = document.querySelector(avatarSelector);
   }

   getUserInfo() {
      this._infoUserEdit = {
         name: this._name.textContent,
         about: this._about.textContent
      };
      return this._infoUserEdit;
   }

   setUserInfo(name, about) {
      this._name.textContent = name;
      this._about.textContent = about;
      //this.setUserAvatar(data);
   }

   setUserAvatar(avatar) {
      this._avatar.src = avatar;
   }

}