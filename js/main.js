/**
* Template Name: MyResume - v2.0.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
$(document).ready(function () {


  




 

  // sticky navigation menu

  let nav_offset_top = $('.header_area').height();

  function navbarFixed() {
      if ($('.header_area').length) {
          $(window).scroll(function () {
              let scroll = $(window).scrollTop();
              if (scroll >= nav_offset_top) {
                  $('.header_area .main-menu').addClass('navbar_fixed');
              } else {
                  $('.header_area .main-menu').removeClass('navbar_fixed');
              }
          })
      }
  }

  navbarFixed();

});

 // Closes responsive menu when a scroll trigger link is clicked
 $('.js-scroll').on("click", function() {
  $('.navbar-collapse').collapse('hide');
});




//modal
//js
$(window).on('load',function(){
  setTimeout(function() {
          $('#enquirypopup').modal('show');
  }, 2000);
      });






!(function($) {

  "use strict";

  $('body').scrollspy({
    target: '.navbar',
    offset: 80
});





  //  typedJS
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

 

})(jQuery);
 // autoscroll animation
 $('.smoothscroll').click(function (e) {
  e.preventDefault();
  var target = $($(this).attr('data-href'));
  $('html,body').stop().animate({
      scrollTop: target.offset().top - 110
  }, 'linear');
});
if (location.hash) {
  var id = $(location.hash);
}
$(window).on('load', function () {
  if (location.hash) {
      $('html,body').animate({ scrollTop: id.offset().top - 100 }, 'swing')
  };
});

