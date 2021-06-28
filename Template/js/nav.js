$(document).ready(function(){
  var menu_btn = $('#menu_btn');
  var menu = $('#menu');

  menu_btn.click(function() {
    menu.slideToggle();
  });
});