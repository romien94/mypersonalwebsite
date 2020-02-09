const burgerMenuButton = document.querySelector('.burger-menu__button');

burgerMenuButton.addEventListener('click', e => {
  e.preventDefault();
  burgerMenuButton.classList.toggle('burger-menu__button--close');
  burgerMenuButton.parentElement.classList.toggle('burger-menu--active');
});
