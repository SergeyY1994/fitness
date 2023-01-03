import '../vendor/swiper';
const reviewsSlider = document.querySelector('.reviews__swiper');

let swiper = new Swiper(reviewsSlider, {
  direction: 'horizontal',
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },
});
