import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import MicroModal from 'micromodal';
import SmoothScroll from 'smooth-scroll';

const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__menu-mobile");
const catalog = document.querySelector(".mobile-catalog");
const hiddenmenu = document.querySelector(".mobile-catalog__hidden-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileNavs.classList.toggle("is-active");
  // overlay.classList.toggle("is-active");
});

catalog.addEventListener("click", () => {
  hiddenmenu.classList.toggle("is-active");
  catalog.classList.toggle("is-active");
  // overlay.classList.toggle("is-active");
});


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


MicroModal.init();

const scrollParams = {
  speed: 1000,
  speedAsDuration: true,
  offset: 0,
  updateURL: false,
};

new SmoothScroll('a[href*="#"]', scrollParams);