$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 500) {
        //console.log('a');
        $(".menu").addClass("fixed-top");
    } else {
        //console.log('a');
        $(".menu").removeClass("fixed-top");
    }
});