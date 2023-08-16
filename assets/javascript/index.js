const closeIcon = document.querySelector("#close-icon");
let hamburger = document.querySelector(".hamburger button"),
  sidebar = document.querySelector(".sidebar-nav"),
  overlay = document.querySelector(".overlay-sidebar");
const body = document.querySelector("body");
function hamburgerMenu(e) {
  e.classList.toggle("change");
}
function toggleSidebar() {
  sidebar.classList.toggle("active"),
    hamburger.classList.remove("change"),
    sidebar.classList.contains("active")
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "visible"),
    sidebar.classList.contains("active")
      ? hamburger.classList.add("change")
      : hamburger.classList.remove("change"),
    (overlay.style.display = sidebar.classList.contains("active")
      ? "block"
      : "none");
}
window.addEventListener("scroll", function () {
  let e = document.querySelector(".header");
  e.classList.toggle("sticky", window.scrollY > 80);
}),
  hamburger.addEventListener("click", toggleSidebar),
  overlay.addEventListener("click", toggleSidebar),
  closeIcon.addEventListener("click", toggleSidebar),
  $(document).ready(function () {
    $(".mobile-menu-item").click(function () {
      $(".submenu-mobile").slideToggle(), $(this).toggleClass("open");
    });
  }),
  $(document).ready(function () {
    $("#hero-slider").owlCarousel({
      items: 1,
      loop: !0,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3500,
    });
  }), //!blog courusel
  $(".delivery-card-carousel").owlCarousel({
    loop: !0,
    margin: 10,
    nav: !0,
    items: 5,
    responsiveClass: !0,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 2e3,
    autoplayHoverPause: !0,
    responsive: {
      0: { items: 1, nav: !1 },
      600: { items: 1 },
      768: { items: 2 },
      1e3: { items: 2 },
      1200: { items: 3 },
    },
  }),
  AOS.init();
