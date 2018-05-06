/**
 * Created by Aries on 2018/5/6.
 */
$(document).ready(function(){
  $('.menuContent').delegate('.hasSub', 'click', function() {
    $(this).find('ul').toggle();
  });
  $('.mobileMenuIcon').click(function () {
    $('.leftMenu').fadeIn(500);
    $('.menuMask').fadeIn(500);
    $('.menu').fadeIn(500);
  });
  $('.menuMask').click(function () {
    $('.menuMask').fadeOut(500);
    $('.leftMenu').fadeOut(500);
  });
});