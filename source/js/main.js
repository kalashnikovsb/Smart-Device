'use strict';

var body = document.querySelector('body');
var popup = document.querySelector('.popup');
var form = document.querySelector('.popup__form');
var openButton = document.querySelector('.button--callback');
var closeButton = document.querySelector('.popup__close');
var nameInput = document.querySelector('.popup [id=popup-name]');
var popupTel = document.querySelector('.popup [id=popup-tel]');
var contactTel = document.querySelector('[id=contact-tel]');
var consultationLink = document.querySelector('.button--consultation');
var consultationAnchor = document.querySelector('[id=consultation]');
var featuresLink = document.querySelector('.attraction__scroll');
var featuresAnchor = document.querySelector('[id=features]');
var openTop = document.querySelector('#open-top');
var openBottom = document.querySelector('#open-bottom');
var listTop = document.querySelector('.main-footer__list-wrap');
var listBottom = document.querySelector('.main-footer__list--right');
var textBottom = document.querySelector('.main-footer__list-text');
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

if (openButton) {
  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (popup.classList.contains('visually-hidden')) {
      bodyScrollTop = getBodyScrollTop();
      body.style.top = '-' + getBodyScrollTop() + 'px';
      var scrollValue = getBodyScrollTop();

      bodyScrollTop = scrollValue;
      body.style.top = '-' + scrollValue + 'px';
      body.classList.add('no-scroll');

      popup.classList.remove('visually-hidden');
      body.appendChild(overlay);
    }
    if (localStorage.getItem('name')) {
      nameInput.value = localStorage.getItem('name');
      nameInput.focus();
    }
    if (localStorage.getItem('tel')) {
      popupTel.value = localStorage.getItem('tel');
      nameInput.focus();
    } else {
      nameInput.focus();
    }
  });
}

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

if (form) {
  form.addEventListener('submit', function (evt) {
    if (!nameInput.value || !popupTel.value) {
      evt.preventDefault();
      closePopup();
    }
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('tel', popupTel.value);
  });
}

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

//Аккордеон
if (openTop) {
  openTop.addEventListener('click', function () {
    if (listTop.classList.contains('visually-hidden')) {
      listTop.classList.remove('visually-hidden');
      openTop.classList.toggle('main-footer__open-menu--opened');
      if (!listBottom.classList.contains('visually-hidden')) {
        listBottom.classList.add('visually-hidden');
        textBottom.classList.add('visually-hidden');
        openBottom.classList.toggle('main-footer__open-menu--opened');
      }
    } else {
      listTop.classList.add('visually-hidden');
      openTop.classList.toggle('main-footer__open-menu--opened');
    }
  });
}

if (openBottom) {
  openBottom.addEventListener('click', function () {
    if (listBottom.classList.contains('visually-hidden')) {
      listBottom.classList.remove('visually-hidden');
      textBottom.classList.remove('visually-hidden');
      openBottom.classList.toggle('main-footer__open-menu--opened');
      if (!listTop.classList.contains('visually-hidden')) {
        listTop.classList.add('visually-hidden');
        openTop.classList.toggle('main-footer__open-menu--opened');
      }
    } else {
      listBottom.classList.add('visually-hidden');
      textBottom.classList.add('visually-hidden');
      openBottom.classList.toggle('main-footer__open-menu--opened');
    }
  });
}

var telOptions = {
  mask: '+{7}(000)000-00-00'
};

if (popupTel) {
  var popupMask = IMask(popupTel, telOptions);
}

if (contactTel) {
  var contactMask = IMask(contactTel, telOptions);
}
