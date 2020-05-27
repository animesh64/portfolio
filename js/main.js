
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

    
    
      // on clicking downloadcv btn
    $('#resume').click(() => {
      
      const file_path = '../AnimeshChourasia_resume.pdf';
      const a = document.createElement('A');
      a.href = file_path;
      a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  })
  $('#cv').click(() => {
      
    const file_path = '../AnimeshChourasia_resume.pdf';
    const a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
})





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

