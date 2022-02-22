$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $('.navbar__navbar-wrapper').addClass('active');
  } else {
    $('.navbar__navbar-wrapper').removeClass('active');
  }
});
