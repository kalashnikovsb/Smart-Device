'use strict';

var popup = document.querySelector('.popup');
var form = document.querySelector('popup__form');
var openButton = document.querySelector('.button--callback');
var closeButton = document.querySelector('.popup__close');
var name = document.querySelector('.popup__input--name');
var tel = document.querySelector('.popup__input--tel');

console.log(name);

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popup.classList.contains('visually-hidden')) {
    popup.classList.remove('visually-hidden');
  }
  name.focus();
});

closeButton.addEventListener('click', function () {
  if (!popup.classList.contains('visually-hidden')) {
    popup.classList.add('visually-hidden');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add('visually-hidden');
  }
});
