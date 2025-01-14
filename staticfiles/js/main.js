// Initialize Swiper
const swiperEl = document.querySelector('swiper-container');

// Swiper parameters
const params = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    }
  }
};

// Assign it to Swiper element
Object.assign(swiperEl, params);

// Initialize Swiper
swiperEl.initialize();