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

});