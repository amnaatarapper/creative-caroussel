$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".menu").addClass("fixed-top");
        $(".back-to-top").addClass("animate");
        $(".back-to-top").css("visibility", "visible");
    } else {
        $(".menu").removeClass("fixed-top");
        $(".back-to-top").removeClass("animate");
        $(".back-to-top").css("visibility", "hidden");
    }
});