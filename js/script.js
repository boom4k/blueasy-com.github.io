(function ($) {
  'use strict';

    function blueasyMenu() {
      var $trigger = $('.open-icon'),
          $menu = $('.open-menu');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle(1000);
      });
      
      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });
    }
    blueasyMenu(); //MENU RESPONSIVE

}(jQuery));



 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});  ///SCROLL TO DOWN




$(document).ready(function() {
 
 
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1500,
         easing: "swing"
      });
      return false;
   });     //SCROLL TO UP
 
 



});