'use strict';

var body = document.querySelector('body');
var popup = document.querySelector('.popup');
var form = document.querySelector('.popup__form');
var openButton = document.querySelector('.button--callback');
var closeButton = document.querySelector('.popup__close');
var nameInput = document.querySelector('.popup__input--name');
var telInput = document.querySelector('.popup__input--tel');
var textarea = document.querySelector('.popup__textarea');

var overlay = document.createElement('div');
overlay.classList.add('overlay');

// Открытие попапа:

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popup.classList.contains('visually-hidden')) {
    popup.classList.remove('visually-hidden');
    body.appendChild(overlay);
  }

  if (localStorage.getItem('name')) {
    nameInput.value = localStorage.getItem('name');
    telInput.focus();
  }
  if (localStorage.getItem('tel')) {
    telInput.value = localStorage.getItem('tel');
    textarea.focus();
  } else {
    nameInput.focus();
  }
});

// Закрытие попапа:

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

overlay.addEventListener('click', function () {
  if (!popup.classList.contains('visually-hidden')) {
    popup.classList.add('visually-hidden');
    body.removeChild(overlay);
  }
});

// Отправка формы:

form.addEventListener('submit', function (evt) {
  if (!nameInput.value || !telInput.value) {
    evt.preventDefault();
    popup.classList.add('visually-hidden');
    body.removeChild(overlay);
  }
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('tel', telInput.value);
});
