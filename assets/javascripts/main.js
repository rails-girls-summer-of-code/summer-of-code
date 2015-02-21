

$(document).ready(function() {
  

  // toggle navigation
  $('#nav-toggle').on('click', function(ev) {
    ev.preventDefault();
    $('#header-hidden').toggleClass('is-open');
    $('#nav-toggle').toggleClass('is-open');
  });

});

