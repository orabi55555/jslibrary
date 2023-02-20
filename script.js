var imgDuration = 3000;
    var fadeSpeed = 2000;
    var container = $('#slideshow-container');
    var curIndex = -1;

    function slideShow() {
        container + $('img.slides').eq(curIndex).fadeOut(fadeSpeed);
        container + $('img.slides').eq(curIndex  = curIndex < container.children().length - 1 ? curIndex + 1 : 0).fadeIn(fadeSpeed);
     timeout= setTimeout("slideShow()", imgDuration);
    }

    slideShow();
    $(".stop").click(function () {
        clearTimeout(timeout);
      });

//   -------------------------------------------------------
 $("#btn1").slideUp();
$(".btn1").hover(function(){
    $("#btn1").slideToggle(2000)
})

$("#btn2").slideUp();
$(".btn2").hover(function(){
    $("#btn2").slideToggle(2000)
})

$("#btn3").slideUp();
$(".btn3").hover(function(){
    $("#btn3").slideToggle(2000)
})