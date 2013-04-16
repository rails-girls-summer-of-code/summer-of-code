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
/**
 * Simple scroll effects on the front page
 */
	$('.scroll').click(function(e) {
			var aim = $(this).attr('href');
			e.preventDefault();
			
			$('html,body').animate({
					scrollTop: $(aim).offset().top
			}, 1500);
	})
/**
 * Accordion on the faq
 */
	// $('.accordion').accordion({
	// 	heightStyle: "content",
	// 	icons: {
	// 		"header": "accordion-header",
	// 		"activeHeader": "accordion-header-active"
	// 	}
	// });

/**
 * Show/ hide navbar
 */
	$(function() {

		var header = $('.intro h2');
		var height = header.height();
		var pos = Math.floor(header.position().top);
		var scroll = height + pos;
		
		$(window).scroll(function() {
			var offset = $(window).scrollTop();
			if($(window).width() > 780) {
				if(offset > scroll) {
					$('.header-container').removeClass('no-scroll');
				} else {
					$('.header-container').addClass('no-scroll');
				}
			}
		})
	})

	
});