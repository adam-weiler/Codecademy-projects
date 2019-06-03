$(document).ready(() =>{
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(300);
  });
  
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut('fast');
    $('.frown').show();
    $('.wrong-answer-one').prop('onclick', null).off('click');
  });
  
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut('fast');
    $('.frown').show();
    $('.wrong-answer-two').prop('onclick', null).off('click');
  });
  
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut('fast');
    $('.frown').show();
    $('.wrong-answer-three').prop('onclick', null).off('click');
  });
  
  $('.correct-answer').on('click', () => {
    $('.wrong-text-one').fadeOut('slow');
    $('.wrong-text-two').fadeOut('slow');
    $('.wrong-text-three').fadeOut('slow');
    $('.frown').hide();
    $('.smiley').show();
  });
});
