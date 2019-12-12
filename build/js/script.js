'use strict';

var body = document.querySelector('body');
var popup = document.querySelector('.popup');
var form = document.querySelector('popup__form');
var openButton = document.querySelector('.button--callback');
var closeButton = document.querySelector('.popup__close');
var name = document.querySelector('.popup__input--name');
var tel = document.querySelector('.popup__input--tel');

var overlay = document.createElement('div');
overlay.classList.add('overlay');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popup.classList.contains('visually-hidden')) {
    popup.classList.remove('visually-hidden');
    body.appendChild(overlay);
    name.focus();
  }
});

closeButton.addEventListener('click', function () {
  if (!popup.classList.contains('visually-hidden')) {
    popup.classList.add('visually-hidden');
    body.removeChild(overlay);
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add('visually-hidden');
    body.removeChild(overlay);
  }
});
