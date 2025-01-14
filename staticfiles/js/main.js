// Initialize Swiper
const swiperEl = document.querySelector('.swiper-container');

// Swiper parameters
const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
};

// Assign it to Swiper element
Object.assign(swiperEl, swiperParams);

// Initialize Swiper
swiperEl.initialize();