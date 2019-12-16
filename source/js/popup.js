'use strict';

var body = document.querySelector('body');
var popup = document.querySelector('.popup');
var form = document.querySelector('.popup__form');
var openButton = document.querySelector('.button--callback');
var closeButton = document.querySelector('.popup__close');
var nameInput = document.querySelector('.popup__input--name');
var telInput = document.querySelector('.popup__input--tel');
var textarea = document.querySelector('.popup__textarea');
var consultationLink = document.querySelector('.button--consultation');
var consultationAnchor = document.querySelector('[id=consultation]');
var featuresLink = document.querySelector('.attraction__scroll');
var featuresAnchor = document.querySelector('[id=features]');

var overlay = document.createElement('div');
overlay.classList.add('overlay');

// Открытие попапа:

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popup.classList.contains('visually-hidden')) {
    popup.classList.remove('visually-hidden');
    body.appendChild(overlay);
    body.classList.add('no-scroll');

    // body.style.top = body.scrollTop + 'px';
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
    body.classList.remove('no-scroll');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add('visually-hidden');
    if (document.querySelector('.overlay')) {
      body.removeChild(overlay);
      body.classList.remove('no-scroll');
    }
  }
});

overlay.addEventListener('click', function () {
  if (!popup.classList.contains('visually-hidden')) {
    popup.classList.add('visually-hidden');
    body.removeChild(overlay);
    body.classList.remove('no-scroll');
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

// Плавная прокрутка

consultationLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  consultationAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
});

featuresLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  featuresAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
});
