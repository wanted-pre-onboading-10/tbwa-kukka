if($.cookie('isVisited')){
  $('.modal-pop').addClass('disabled');
}else{
  $('.modal-pop').removeClass('disabled');
}


$('.modal__button-box--cookie').click(function(){
  $.cookie('isVisited', true, { expires: 1 });
  $('.modal-pop').addClass('disabled');
})

$('.modal__button-box--close').click(function(){
  $('.modal-pop').addClass('disabled');
})