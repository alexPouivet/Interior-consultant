$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("#menu-mobile").fadeToggle(200);
      $("#menu-mobile").toggleClass('open');
    });
});
