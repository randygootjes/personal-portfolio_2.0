$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header a").addClass("scrolling");
    } else {
        $(".header a").removeClass("scrolling");
    }
});