'use strict';

var body = document.querySelector('body');
var popup = document.querySelector('.popup');
var form = document.querySelector('.popup__form');
var openButton = document.querySelector('.button--callback');
var closeButton = document.querySelector('.popup__close');
var nameInput = document.querySelector('.popup [id=popup-name]');
var telInput = document.querySelector('.popup [id=popup-tel]');
var textarea = document.querySelector('.popup textarea');
var consultationLink = document.querySelector('.button--consultation');
var consultationAnchor = document.querySelector('[id=consultation]');
var featuresLink = document.querySelector('.attraction__scroll');
var featuresAnchor = document.querySelector('[id=features]');
var bodyScrollTop = 0;

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

var closePopup = function () {
  popup.classList.add('visually-hidden');
  body.removeChild(overlay);
  body.removeAttribute('style');
  body.classList.remove('no-scroll');
  window.scrollTo(0, bodyScrollTop);
};

var overlay = document.createElement('div');
overlay.classList.add('overlay');

// Открытие попапа:
if (openButton) {
  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (popup.classList.contains('visually-hidden')) {
      var scrollValue = getBodyScrollTop();

      bodyScrollTop = scrollValue;
      body.style.top = '-' + scrollValue + 'px';
      body.classList.add('no-scroll');

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
}

// Закрытие попапа:
if (closeButton) {
  closeButton.addEventListener('click', function () {
    if (!popup.classList.contains('visually-hidden')) {
      closePopup();
    }
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add('visually-hidden');
    if (document.querySelector('.overlay')) {
      closePopup();
    }
  }
});

if (overlay) {
  overlay.addEventListener('click', function () {
    if (!popup.classList.contains('visually-hidden')) {
      closePopup();
    }
  });
}

// Отправка формы:
if (form) {
  form.addEventListener('submit', function (evt) {
    if (!nameInput.value || !telInput.value) {
      evt.preventDefault();
      closePopup();
    }
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('tel', telInput.value);
  });
}

// Плавная прокрутка
if (consultationLink) {
  consultationLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    consultationAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
  });
}

if (featuresLink) {
  featuresLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    featuresAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
  });
}
