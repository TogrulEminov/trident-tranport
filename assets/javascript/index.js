const closeIcon = document.querySelector('#close-icon');
let hamburger = document.querySelector('.hamburger button');
let sidebar = document.querySelector('.sidebar-nav');
let overlay = document.querySelector('.overlay-sidebar');
const body = document.querySelector('body');
// !header
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 80);
});

// ! hamburger icon
function hamburgerMenu(button) {
  button.classList.toggle('change');
}

function toggleSidebar() {
  sidebar.classList.toggle('active');
  hamburger.classList.remove('change');
  sidebar.classList.contains('active')
    ? (body.style.overflow = 'hidden')
    : (body.style.overflow = 'visible');
  sidebar.classList.contains('active')
    ? hamburger.classList.add('change')
    : hamburger.classList.remove('change');
  overlay.style.display = sidebar.classList.contains('active')
    ? 'block'
    : 'none';
}
hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
closeIcon.addEventListener('click', toggleSidebar);

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
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
  });
});
//!blog courusel
$('.delivery-card-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 5,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
AOS.init();
