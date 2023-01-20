const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// POP-UP

window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".open-pop-up-js")
    .addEventListener("click", function () {
      document.querySelector("#pop-up").classList.toggle("pop-up-active");
    });
});

window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#close-pop-up")
    .addEventListener("click", function () {
      document.querySelector("#pop-up").classList.toggle("pop-up-active");
    });
});
