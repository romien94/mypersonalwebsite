var parallax = (function() {
  var ph1 = document.querySelector('.parallax-header__item--1'),
    ph2 = document.querySelector('.parallax-header__item--2'),
    ph3 = document.querySelector('.parallax-header__item--3'),
    ph4 = document.querySelector('.parallax-header__item--4'),
    ph5 = document.querySelector('.parallax-header__item--5'),
    ph6 = document.querySelector('.parallax-header__item--6');
  
  return {
    move: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var style = block.style;
      var transformString = 'translate3d(0, '+ strafe +', 0)';

      style.top = strafe;
      style.webkitTransform = transformString;
    },
    init: function(wScroll) {
      var welcomeOffset = getOffsets('welcome-section').bottom;

      if (welcomeOffset > 0) {
        this.move(ph1, wScroll, 350);
        this.move(ph2, wScroll, 100);
        this.move(ph3, wScroll, 100);
        this.move(ph4, wScroll, 60);
        this.move(ph5, wScroll, 250);
        this.move(ph6, wScroll, 250);
      }
  }
}
}());

function getOffsets(block) {
  var element =  document.querySelector('.'+block),
    rect = element.getBoundingClientRect();
  return rect;
};

window.onscroll = function() {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll);
};