import '../vendor/swiper';
const coachesSlider = document.querySelector('.coaches__swiper');

let swiper = new Swiper(coachesSlider, {
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperSlideDublicates = document.querySelectorAll('.swiper-slide-duplicate');

for (let element of swiperSlideDublicates) {
  element.removeAttribute('tabIndex');
}
