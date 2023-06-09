 $(function(){

   $('.slider__inner').slick({
     prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-prev.svg" alt="arrow-left"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-next.svg" alt="arrow-right"></button>',
     speed: 500,
     fade: true,
     cssEase: 'linear',
     dots: true,
     responsive: [
       {
         breakpoint: 1200,
         settings: {
           arrows: false
         }
       }
      ]
   });

   $('.accordion__question').on('click', function () {
     $(this).toggleClass('question__open');
     $(this).children('.question__answer').slideToggle(400);
   });

   $('.button-click').on('click', function(){
     $('html').css('overflow-y','hidden');
     $('.js-overlay-dilivery').fadeIn();
     $('.js-overlay-dilivery').addClass('disabled');
   })

   $('.popup__close').on('click', function(){
     $('.js-overlay-dilivery').fadeOut();
     $('html').css('overflow-y','auto');
   })

   $('.popup__btn').on('click', function(){
     $('.js-overlay-dilivery').fadeOut();
     $('html').css('overflow-y','auto');
   })
  });
  