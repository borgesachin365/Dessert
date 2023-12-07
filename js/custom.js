$(document).ready(function(){
    $('#our-specialities .owl-carousel').owlCarousel(
      {
        items: 4,
        margin: 16,
        stagePadding: 0,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        navSpeed: 500,
        dots: true,
        dotsEach: true,
        nav: false,
        navText: ['',''],
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
      }
    );

  });