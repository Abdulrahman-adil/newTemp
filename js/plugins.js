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
// fixed menue
var clicked = false;
var Body = $('body');
 $('.setting-box .toggle-setting').on('click',function () {

if (clicked == false) {
$(this).parent('.setting-box').animate({
        'left' : '0',
        });
  clicked = true;
/*   Body.animate({
      paddingLeft: '200px'
  });  */
  $('.toggle-setting').hide();
     } else {
$(this).parent('.setting-box').animate({
        'left' : '-200px',
        });
  clicked = false;

 }
console.log(clicked);

});

 $(document).click( function (e) {
 var target = $(e.target);
 if (!target.is(".toggle-setting") && !target.is('.setting-box') && clicked == true) {
  $('.setting-box').animate({
     'left' :'-200px',
  });
   clicked = false;
   console.log(clicked);
   $('.toggle-setting').show();
/*    Body.animate({
    paddingLeft: '-200px'
});  */
 }
});  

$(".toggle-setting, .setting-box").click(function(e) {
    e.stopPropagation();
  })

    // smooth Scroll To Div

    $('.links li a').click(function (e) {

        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 500);
        e.preventDefault();
    });

// loding page 
$(window).on("load",function() {
    $(".loding-wrapper").fadeOut("slow");
})
});


  // start buttons with effects

