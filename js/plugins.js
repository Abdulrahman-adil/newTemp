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

var clicked = false;
 $('.setting-box .toggle-setting').on('click',function () {

if (clicked == false) {
$(this).parent('.setting-box').animate({
        'left' : '0',
        },1000);
  clicked = true;
     } else {
$(this).parent('.setting-box').animate({
        'left' : '-200px',
        },1000);
  clicked = false;
 }
console.log(clicked);
});

 $(document).click( function (e) {
 var target = $(e.target);
 if (!target.is(".toggle-setting") && !target.is('.setting-box') && clicked == true) {
  $('.setting-box').animate({
     'left' :'-200px',
  },1000);
   clicked = false;
   console.log(clicked);
  
 }
});  

$(".toggle-setting, .setting-box").click(function(e) {
    e.stopPropagation();
  })


/*      $('.setting-box').click(function() {
        $('.toggle-setting').hide(1000);

     });  */
     // press anywere to close the setting box
/*      $(document).click(function(e) {
         var setting = $(".setting-box");
         if (!setting.is(e.target) && setting.has(e.target === 0)) {
             setting.fadeOut();
         }
     }) */

/*      $('.toggle-setting').click(function () {
         $('.setting-box').addClass('open');
     });
      
     $('body').click(function () {
         $('.setting-box').removeClass('open');
     }) */

     // setting box
/*      var clicked = false;
   $('.setting-box .toggle-setting').on('click',function () {
         $(this).parent('.setting-box').toggleClass('open');

         if ($(this).parent('.setting-box').hasClass('open')) {
            
            $(this).parent('.setting-box').animate({
                left:0,
            },1000);

/*           $('body').animate({
                paddingLeft: '200px',
            });  */

/*         } else {
        $(this, 'body').parent('.setting-box').animate({
              left:'-200',
          },1000);
        }
    });
        $(document).click( function () {
            var target = $(event.target);
            if (!target.is(".toggle-setting") && !target.is('.setting-box') && clicked == true) {
             $('.setting-box').animate({
                'left' :'-200px',
             });
              clicked = false;
              console.log(clicked);
            }
           });   */

});
