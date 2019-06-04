$(document).ready(() => {
  $('#text').on('keyup', event => { //When user lets go of key, the text in the textarea box appears in the preview div.
    $('.preview').html($(event.currentTarget).val());
  });
  
  $('#font').on('change', (event) => { //Change on this input box changes font family.
		$('.preview').css({
      fontFamily: $(event.currentTarget).val()
		})
  });
  
  $('#weight').on('change', (event) => { //Change on this input box changes font weight.
		$('.preview').css({
      fontWeight: $(event.currentTarget).val()
		})
  });
  
  $('#size').on('input', (event) => { //When user lets go of key changes the font size.
    fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css({
      fontSize: fontSize
		})
  })
})
