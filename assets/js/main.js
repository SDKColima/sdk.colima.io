$(document).ready(function() {
  $('.scrollTo').on('click', function(ev) {
    ev.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});