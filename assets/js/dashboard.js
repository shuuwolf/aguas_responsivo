(function($) {
  'use strict';
  $.fn.andSelf = function() {
    return this.addBack.apply(this, arguments);
  }
  $(function() {
    if ($('#owl-carousel-banner').length) {
      $('#owl-carousel-banner').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-menu-main').length) {
      $('#owl-carousel-menu-main').owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: false,
        autoplay: false,
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 2
          },
          600: {
            items: 3
          },
          800: {
            items: 4
          },
          1000: {
            items: 5
          },
          1250: {
            items: 6
          }
        }
      });
    }
    if ($('#owl-carousel-birthday').length) {
      $('#owl-carousel-birthday').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-main').length) {
      $('#owl-carousel-main').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,//true??
        nav: true,
        rtl: isrtl,
        URLhashListener:true,//Para usar o menu abaixo do banner para navegar
        autoplay: false, //parei pra desenvolver, tava chato ja '-'
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    var isrtl = $("body").hasClass("rtl");
    if ($('#owl-carousel-rtl').length) {
      $('#owl-carousel-rtl').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: true,
        rtl: isrtl,
        autoplay: true,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-right'></i>", "<i class='mdi mdi-chevron-left'></i>"],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    });
})(jQuery);