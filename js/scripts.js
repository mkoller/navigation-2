$(document).ready(function() {
  var $menu = $('#menu'),
    $menulink = $('.menu-link'),
    $wrap = $('#wrap');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $wrap.toggleClass('active');
    $('.bar').toggleClass('animate');
    return false;
	});

});