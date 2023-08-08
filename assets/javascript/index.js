// !header
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 80);
});

$(document).ready(function () {
  $('.mobile-menu-item').click(function () {
    $('.submenu-mobile').slideToggle();
    $(this).toggleClass('open');
  });
});

$(document).ready(function () {
  $('#hero-slider').owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
  });
});

AOS.init();
