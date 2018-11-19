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
