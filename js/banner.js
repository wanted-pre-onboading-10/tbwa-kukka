
$('.banner__container').css('height',$('.banner__item--left').width()*0.28);
$(window).resize(function(){
  $('.banner__container').css('height',$('.banner__item--left').width()*0.28)
})
$('.carousel').carousel({
  interval: 0
})