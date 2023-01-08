
// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 8,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,

    },
    580: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 4,
    }
  }
});