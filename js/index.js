$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeOut: 1000,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
// sticky top js

window.addEventListener("scroll", function () {
  var header = document.getElementById("sticky-top");
  header.classList.toggle("sticky", window.scrollY > 40);
  console.log(header);
});

// bottom to top js code
