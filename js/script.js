$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".menu").addClass("fixed-top");
    } else {
        $(".menu").removeClass("fixed-top");
    }
});