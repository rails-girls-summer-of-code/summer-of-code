// Main JS

$(document).ready(function() {

/* Donation Campaign */
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

    var stripe_key_live_mode = 'pk_live_CDQ1VjqbJHkFUm1qOGzeMI30';
    var stripe_key_test_mode = 'pk_test_RUBGjkgJ0PCjuCQ1VaUCwKM2';

    StripeCheckout.open({
      key:         stripe_key_live_mode,
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
