
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


function clickToCopy() {
  // Get the text field
  var copyText = document.getElementById("textInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
} 