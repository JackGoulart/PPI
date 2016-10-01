$(document).ready(function(){
    
   $(".sub-menu").hide();
   $(".sub-sub-menu").hide();
    
  $(".show-sub-menu").hover(function(){
     $(this).find(".sub-menu").slideDown();
    
  }, function(){
      $(this).find(".sub-menu").slideUp();
  });
    
    $(".show-sub-sub-menu").hover(function(){
       $(this).find(".sub-sub-menu").slideDown(); 
    }, function(){
        $(this).find(".sub-sub-menu").slideUp();
    });
    
});