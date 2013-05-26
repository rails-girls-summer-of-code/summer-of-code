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
					scrollTop: $(aim).offset().top - 80
			}, 1500);
	})
/**
 * Accordion on the faq
 */
	$('.accordion').accordion({
		heightStyle: "content",
		icons: {
			"header": "accordion-header",
			"activeHeader": "accordion-header-active"
		}
	});

/**
 * Show/ hide navbar
 */
	$(function() {

		var header = $('.intro h2');
    if (header.length == 0) return;
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

  $('.donate-button').click(function(){
    var self = $(this);
    var amount = 0;
    if (self.attr('data-custom')) {
      amount = $('#custom-donation-amount').val();
      if (amount === "") {
        amount = 75;
      }
    } else {
      amount = self.attr('data-amount');
    }
    amount = amount * 100;

    var package = self.attr('data-name');

    var token = function(res) {
      $('input[name="stripe_card_token"]').val(res.id);
      $('input[name="amount"]').val(amount);
      $('input[name="package"]').val(package);
      $('form#stripe-form').submit();
    };
    var description = package == 'Custom' ? 'Your donation' : package + ' Sponsorship';

    StripeCheckout.open({
      key:         'pk_test_1z7JS6h82UpmSL1gzmrRKxAa',
      address:     false,
      amount:      amount,
      currency:    'usd',
      name:        'Rails Girls Summer of Code',
      description: description,
      panelLabel:  'Donate',
      token:       token
    });

    return false;
  });

});
