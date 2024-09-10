import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Navigation,
  Autoplay,
  Mousewheel,
  Pagination,
  Thumbs,
  Controller,
  EffectFade,
} from "swiper/modules";

new Swiper(".our-works .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  spaceBetween: 26,
  loop: true,
  speed: 2000,

  breakpoints: {
    260: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 2,
    },
    740: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".our-works__slider .swiper-button-next",
    prevEl: ".our-works__slider .swiper-button-prev",
  },

});

new Swiper(".reviews .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  spaceBetween: 26,
  loop: true,
  speed: 2000,

  breakpoints: {
    260: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 2,
    },
    740: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".reviews__wrapper .swiper-button-next",
    prevEl: ".reviews__wrapper .swiper-button-prev",
  },

});