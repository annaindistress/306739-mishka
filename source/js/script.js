var navMain = document.querySelector('.main-navigation');
var navToggle = navMain.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');
navMain.classList.add('main-navigation--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened')
  } else {
    navMain.classList.remove('main-navigation--opened')
    navMain.classList.add('main-navigation--closed');
  }
});

var modalPopup = document.querySelector('.modal');
var modalOverlay = document.querySelector('.page__modal-overlay');

var openPopup = function () {
  if (modalPopup.classList.contains('modal--closed')) {
    modalPopup.classList.remove('modal--closed');
    modalOverlay.classList.remove('page__modal-overlay--closed');

    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 27) {
        modalPopup.classList.add('modal--closed');
        modalOverlay.classList.add('page__modal-overlay--closed');
      }
    });
  }
}

var page = document.querySelector('.page');

if (page.classList.contains('page--index')) {
  var indexOpenButton = document.querySelector('.weekly-offer__button');

  indexOpenButton.addEventListener('click', openPopup);

  indexOpenButton.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      openPopup();
    }
  });
} else {
  var catalogOpenButton = document.querySelector('.product__buy-button')

  catalogOpenButton.addEventListener('click', openPopup);

  catalogOpenButton.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      openPopup();
    }
  });
}
