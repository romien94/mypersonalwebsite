const headerParallax = document.querySelector('.parallax-header');
const footerParallax = document.querySelector('.parallax-footer');
const headerLayers = headerParallax.children;
const guitar = footerParallax.querySelector('.parallax-footer__layer-bg--guitar');

function moveHeaderLayersOnScroll(wScroll) {
  Array.from(headerLayers).forEach(layer => {
    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 10;
    layer.style.transform = `translateY(-${strafe}%)`;
  })
}

function performGuitarAnimation(wScroll) {
  const currentTransform = guitar.dataset.transform;
  const strafe = wScroll/100;
  guitar.style.transform=`translateX(${strafe}%)`;
}

window.addEventListener('scroll',e => {
  const wScroll = window.pageYOffset;
  if (wScroll <= 1000) {
    moveHeaderLayersOnScroll(wScroll);
  } if (wScroll >= 4000) {
    performGuitarAnimation(wScroll);
  }
})