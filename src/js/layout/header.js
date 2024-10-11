import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import MicroModal from 'micromodal';
import SmoothScroll from 'smooth-scroll';

const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__menu-mobile");
const catalog = document.querySelector(".mobile-catalog");
const hiddenmenu = document.querySelector(".mobile-catalog__hidden-menu");

const header = document.querySelector('.header__wrapper');
const headersecond = document.querySelector('.header-second__wrapper');

if (document.querySelector('.header__wrapper')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      header.classList.add('header__wrapper--fixed');
    } else {
      header.classList.remove('header__wrapper--fixed');
    }
  });
};

if (document.querySelector('.header-second__wrapper')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      headersecond.classList.add('header-second__wrapper--fixed');
    } else {
      headersecond.classList.remove('header-second__wrapper--fixed');
    }
  });
};

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