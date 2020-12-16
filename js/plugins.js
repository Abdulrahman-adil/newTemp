$(function () {
    "use strict";
  // make div height the same window
  var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 2000
    });

    // initialaize smooth scroll
  $(window).scroll(function () {
      if ($(this).scrollTop()) {
          $('#totp').fadeIn();
      } else {
          $('#totp').fadeOut();
      }
  });
  $('#totp').click(function () {

      $("html, body").animate({scrollTop: 0},1000);
  });

/*   $("body").niceScroll({
        
    cursorcolor: "#18BB9E",
      cursorwidth: "10px",
       cursorborder: 'none',
      boxzoom: true,
      scrollspeed: 100
}); */

 // Our auto slider code

 (function autoSlider() {

    $('.slider .active').each(function () {

        if (!$(this).is(':last-child')) {

            $(this).delay(3000).fadeOut(1000, function () {

                $(this).removeClass('active').next().addClass('active').fadeIn();
                autoSlider();

            });

        } else {

            $(this).delay(9000).fadeOut(2000, function () {

                $(this).removeClass('active');
                $('.slider div').eq(0).addClass('active').fadeIn();
                autoSlider();



            });

        }

    });

}());

/* $("body").niceScroll({
    cursorcolor:"aquamarine",
    cursorwidth:"16px"
  });
     */
});

 
