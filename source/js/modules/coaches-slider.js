import Swiper from '../vendor/swiper';
const coachesSlider = document.querySelector('.coaches__swiper');

if (coachesSlider) {
  // eslint-disable-next-line
  let swiper = new Swiper(coachesSlider, {
    direction: 'horizontal',
    loop: true,
    keyboard: {
      enabled: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: '.coaches__swiper-button-next',
      prevEl: '.coaches__swiper-button-prev',
    },
  });
}
