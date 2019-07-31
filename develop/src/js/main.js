$(window).on('resize',function(){
  // resize();
})

// Anchor
$('a[href^="#"]').click(function(){
  var hasttop = $(this.hash).offset().top;
  var headerheight = $("#header").innerHeight();
  var hasttopNew = hasttop - headerheight
  $('html, body').animate({
    scrollTop: hasttopNew
  }, 500);
  return false;
});

//hamburger
$(".hamburger").click(function() {
	$(this).toggleClass("open");
});

// $(window).on('load scroll', function(){
//   var elem = $('.animated');
//   elem.each(function () {
//     var isAnimate = $(this).data('animate');
//     var elemOffset = $(this).offset().top;
//     var scrollPos = $(window).scrollTop();
//     var wh = $(window).height();
//
//     if(scrollPos > elemOffset - wh + (wh / 2)){
//       $(this).addClass(isAnimate);
//     }else{
//       $(this).removeClass(isAnimate);
//     }
//   });
// });
