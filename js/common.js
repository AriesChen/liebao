/**
 * Created by Aries on 2018/5/6.
 */
$(document).ready(function(){
  $('.menuContent').delegate('.hasSub', 'click', function() {
    $(this).find('ul').toggle();
  });
  function resetTab() {
    $('.switchNav').find('span').each(function () {
      $(this).removeClass('active');
      $('.' + $(this).attr('name')).css('display', 'none');
    });
  }
  $('.switchNav').delegate('span', 'click', function () {
    resetTab();
    $(this).addClass("active");
    $('.' + $(this).attr('name')).css('display', 'block');
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