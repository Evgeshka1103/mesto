(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var u=e.data,c=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._image=u.link,this._title=u.name,this._numberLike=u.likes.length,this._cardId=u._id,this._cardOwner=u.owner._id,this._myId=i,this._handleCardClick=c,this._templateSelector=n,this._handleLike=o,this._handleCardDelete=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"numberLikes",value:function(e){this._numberLike=e.length,this._likeNumbers.textContent=this._numberLike}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".elements__like"),this._deleteButton=this._element.querySelector(".elements__delete"),this._cardImage=this._element.querySelector(".elements__mask-group"),this._cardImage.src=this._image,this._cardImage.alt=this._title,this._element.querySelector(".elements__sight").textContent=this._title,this._likeNumbers=this._element.querySelector(".elements__number-like"),this._likeNumbers.textContent=this._numberLike,this._checkOwner(),this._setEventListeners(),this._element}},{key:"_checkOwner",value:function(){this._cardOwner===this._myId&&this._enableDelete()}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._image,e._title)})),this._likeButton.addEventListener("click",(function(){e._handleLike(e,e._cardId,e._isLiked)}))}},{key:"toggleLike",value:function(e){e?(this._likeButton.classList.add("elements__like_active"),this._isLiked=!0):(this._likeButton.classList.remove("elements__like_active"),this._isLiked=!1)}},{key:"handleDelete",value:function(){this._element.remove(),this._element=null}},{key:"_enableDelete",value:function(){var e=this;this._deleteButton.classList.add("elements__delete_active"),this._deleteButton.removeAttribute("disabled"),this._deleteButton.addEventListener("click",(function(){e._handleCardDelete(e._cardId,e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formTemplate=n}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formTemplate.querySelector("#".concat(e.id,"-error"));e.classList.add(this._errorClass),n.textContent=t,n.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formTemplate.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._inputList=Array.from(this._formTemplate.querySelectorAll(this._inputSelector)),this._buttonElement=this._formTemplate.querySelector(this._submitButtonSelector),this.toggleButtonState(),this._setEventListeners()}},{key:"clearError",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}}],n&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupItem=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupItem.classList.add("popup__opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup__opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListener",value:function(){var e=this;this._popupItem.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup__opened")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popupItem.querySelector(".popup__image"),t._popupCaption=t._popupItem.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupCaption.textContent=t,this._popupImage.alt=t,this._popupImage.src=e,s(_(u.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popupItem.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._submitButton=t._form.querySelector("popup__button"),t._submitButtonDefault=t._submitButton.textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._inputList.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListener",value:function(){var e=this;v(S(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){v(S(u.prototype),"close",this).call(this),this._form.reset()}},{key:"buttonFormLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonDefault}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatarProfile=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._infoUserEdit={name:this._name.textContent,about:this._about.textContent},this._infoUserEdit}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._about.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatarProfile.src=e}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserProfileData",value:function(){var e=this;return fetch("".concat(this._url,"/v1/cohort-51/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._check(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/v1/cohort-51/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._check(t)}))}},{key:"patchUserProfileData",value:function(e,t){var n=this;return fetch("".concat(this._url,"/v1/cohort-51/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._check(e)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/v1/cohort-51/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._check(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/v1/cohort-51/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._check(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._url,"/v1/cohort-51/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._check(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/v1/cohort-51/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._check(e)}))}},{key:"patchAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/v1/cohort-51/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._check(e)}))}},{key:"_check",value:function(e){return e.ok?e.json():Promise.reject(e)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function T(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popupItem.querySelector(".popup__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;I(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._cardId,e._currentCard)}))}},{key:"open",value:function(e,t){this._cardId=e,this._currentCard=t,I(R(u.prototype),"open",this).call(this)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c),A=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__button"),F=document.querySelector(".profile__avatar-edit"),U=(document.querySelectorAll(".popup__button-close"),document.querySelectorAll(".popup__button"),document.querySelectorAll(".popup"),document.querySelector(".popup_profile")),V=document.querySelector(".popup_new-place"),N=document.querySelector(".popup_photo-template"),J=(document.querySelector(".popup__form_profile"),document.querySelector(".popup__form_new-place"),U.querySelector(".popup__input_form-name")),G=U.querySelector(".popup__input_form-about"),H=(document.querySelector(".profile__info-name"),document.querySelector(".profile__info-about"),V.querySelector(".popup__input_form-name"),V.querySelector(".popup__input_form-about"),N.querySelector(".popup__image"),N.querySelector(".popup__caption"),document.querySelector(".elements"),document.querySelector(".template").content,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"error__active",errorClass:"popup__input_form-error"});function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new C({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-51",headers:{authorization:"5c931bad-1961-412c-8ce8-c9feec65b03a","Content-Type":"application/json"}}),$=null,K=new d(".popup_photo-template"),Q=new i({renderer:function(e,t){var n=X(e,t);Q.addItem(n)}},".elements");function W(e,t,n){n?z.deleteLike(t).then((function(t){e.toggleLike(!1),e.numberLikes(t.likes)})).catch((function(e){console.log(e)})):z.putLike(t).then((function(t){e.toggleLike(!0),e.numberLikes(t.likes)})).catch((function(e){console.log(e)}))}function X(e,n){var r=!!e.likes.find((function(e){return e._id===n})),o=new t({data:e,handleCardClick:function(){K.open(e.name,e.link)}},".template",ne,W,n),i=o.generateCard();return o.toggleLike(r),i}var Y=new w({popupSelector:".popup_new-place",handleFormSubmit:function(e){Y.buttonFormLoading(!0),z.postNewcard(e.name,e.link).then((function(e){var t=X(e,e.owner._id);defaultcardList.setItem(t),Y.close()})).catch((function(e){console.log(e)})).finally((function(){return Y.buttonFormLoading(!1)}))}}),Z=new w({popupSelector:".popup_profile",handleFormSubmit:function(e){Z.buttonFormLoading(!0),z.patchUserProfileData(e.nameProfile,e.aboutProfile).then((function(e){putchUserProfileData(e),Z.close()})).catch((function(e){console.log(e)})).finally((function(){return Z.buttonFormLoading(!1)}))}});Z.setEventListeners();var ee=new w({popupSelector:".popup_avatar",handleFormSubmit:function(e){ee.buttonFormLoading(!0),z.patchAvatar(e.link).then((function(e){re(e),ee.close()})).catch((function(e){console.log(e)})).finally((function(){return ee.buttonFormLoading(!1)}))}});ee.setEventListeners();var te=new D({popupSelector:".popup_confirm",handleFormSubmit:function(e,t){z.deleteCard(e).then((function(){t.handleDelete(),te.close()})).catch((function(e){console.log(e)}))}});function ne(e,t){te.open(e,t)}function re(e){oe.setUserAvatar(e.avatarProfile)}te.setEventListeners();var oe=new O({nameSelector:".profile__info-name",aboutSelector:".profile__info-about",avatarSelector:".profile__avatar"});A.addEventListener("click",(function(){var e;e=oe.getUserInfo(),J.value=e.name,G.value=e.job,Z.open(),ue.clearError()})),x.addEventListener("click",(function(){ie.clearError(),Y.open()})),F.addEventListener("click",(function(){ce.clearError(),ee.open()})),K.setEventListeners();var ie=new r(H,V);ie.enableValidation();var ue=new r(H,U);ue.enableValidation();var ce=new r(H,ee);ce.enableValidation(),Promise.all([z.getInitialCards(),z.getUserData()]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];re(i),t=i,oe.setUserInfo(t.name,t.about),$=i._id,Q.renderItems(u.reverse(),$)})).catch((function(e){console.log(e)}))})();