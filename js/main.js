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
      var step = parseInt($(this).attr('data-step'));
			e.preventDefault();

      console.log(Math.pow(6, step))
			$('html,body').animate({
					scrollTop: $(aim).offset().top - 120 + Math.pow(8, step)
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
	});

  $(function() {
    if(location.hostname == 'localhost') {
      $('#stripe-form').attr('action', 'http://localhost:3000/donations/checkout');
    }
  });

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
    amount = Math.abs(amount * 100);

    var package = self.attr('data-name');

    var token = function(res) {
      $('input[name="stripe_card_token"]').val(res.id);
      $('input[name="amount"]').val(amount);
      $('input[name="package"]').val(package);
      $('form#stripe-form').submit();
    };
    var description = package == 'Custom' ? 'Your donation' : package + ' Sponsorship';

    StripeCheckout.open({
      key:         location.hostname == 'localhost' ? 'pk_test_oqAFNUozwz75eFQdaTyKojFt' : 'pk_live_yCtxaMJZgFa64UQKWEVsrL5h',
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
  
  // Mobile navigation toggle
  //$('.nav-primary > ul').addClass('hidden');
  $('.hamburger').click(function() {
    $('.nav-primary > ul').toggle('hidden');
    console.log('click');
  });


});
