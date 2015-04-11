$(document).ready(function() {
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

  // toggle navigation
  $('#nav-toggle').on('click', function(ev) {
    ev.preventDefault();
    $('#header-hidden').toggleClass('is-open');
    $('#nav-toggle').toggleClass('is-open');
  });

  // add 'the right place to be' sponsor cta
  $('.sponsors.partners > ul').append('<li class="sponsors-cta"><h3>The right place to be!</h3><a href="/sponsors/packages/" class="arrow-link">become a sponsor</a></li>');

  $.fn.donations = function(data) {
    return new Donations(this, data);
  };

  var progress = $('#progress').progress();
  new Stats.Data(function(total) {
    progress.result(total);
    $('.stats .total').stats(total);
  });

  new Donations.Data(function(data) {
    $('#sponsors').donations(data.sponsors());
    new Pagination($('.pagination'), data.donations(), 50, function(data) {
      $('#donations').donations(data);
    });
  });
});

