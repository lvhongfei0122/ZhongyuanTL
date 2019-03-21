// JavaScript Document
$(function(){
	$(".ul li").each(function(){
          if($(this).children("a").hasClass("xz"))
          {
              $(this).hover(function(){
                                        $(this).children(".xl").stop(true,false).slideDown()
                                     },function(){
                                         $(this).children(".xl").stop(true,false).slideUp()
                                     })
              }
             else{
                 $(this).hover(function(){
                                        $(this).children("a").addClass("xz");
                                        $(this).children(".xl").stop(true,false).slideDown()
                                     },function(){
                                        $(this).children("a").removeClass("xz");
                                        $(this).children(".xl").stop(true,false).slideUp()
                                     })
                 }
          }) 
}) 

$(document).ready(function() {
    $(".fh").hide();
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $(".fh").fadeIn(1500);
        } else {
          $(".fh").fadeOut(1500);
        }
      });
      $(".fh").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },1000);
        return false;
      });
    });
});
