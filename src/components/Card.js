export default class Card{
  constructor(data, handleCardClick, templateSelector){
    this._image = data.link;
    this._title = data.name;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick; //// делаем неприватным, чтобы использовать извне
  }

  _getTemplate(){
    //// эта функция просто определяет элемент, ничего не возвращая
    const cardElement = document.querySelector(this._templateSelector);
    this._element = cardElement.content.querySelector('.elements__card').cloneNode(true);
  }

  _generateCard(){

    this._getTemplate(); // получаем доступ к элементу 
    this._likeButton = this._element.querySelector('.elements__like');
    this._deleteButton = this._element.querySelector('.elements__delete'); 
    this._cardImage = this._element.querySelector('.elements__mask-group');
    this._cardImage.src = this._image; 
    this._cardImage.alt = this._title;
    this._element.querySelector('.elements__sight').textContent = this._title;

    this._setEventListeners();
  }

  _setEventListeners(){
    //открываем попап
    this._cardImage.addEventListener('click', () => {
      this.handleCardClick(this._image, this._title)
    });

    //удаляем 
    this._deleteButton.addEventListener('click', () => {
      this._handleDelete()
    });

    //лайкаем 
    this._likeButton.addEventListener('click', () => {
      this._handleLike()
    });
  }

  _handleLike(){
    this._likeButton.classList.toggle('elements__like_active');
  }

  _handleDelete(){
    this._element.remove();
    this._element = null;
  }

  render(){ 
    this._generateCard();
    return this._element; 
  } 
}
