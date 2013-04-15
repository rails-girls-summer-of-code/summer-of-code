// Main JS

$(document).ready(function() {

/** 
*   Implement steallar.js for parallax,
*   but not on mobile devices and small screens, cause it can cause trouble.
*   Check for touch (-> mobile) w/ modernizr and screen width and then apply stellar
*/
    if(! Modernizr.touch && $(window).width() > 800) {
        $(window).stellar();
    }

    $('.scroll').click(function(e) {
        var self = $(this);
        e.preventDefault();
        var ziel = self.parent().find('.wrapper');

        console.log(ziel.offset());
        // $('html,body').animate({
        //     scrollTop: ziel.offsetTop()
        // }, 2000);
    })
    $('.accordion').accordion({
        heightStyle: "content",
        icons: {
          "header": "accordion-header",
          "activeHeader": "accordion-header-active"
        }
    });
});