$(function () {
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
       $(".our-head").fitText();
});
