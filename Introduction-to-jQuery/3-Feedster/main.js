$(document).ready(() => {  
  $('.menu').on('mouseenter', () => { //When hover over menu button.
    $('.nav-menu').show(); //Display menu.
  })
  
  $('.nav-menu').on('mouseleave', () => { //When hover away from menu.
    $('.nav-menu').hide(); //Hide menu.
  })
  
  $('.btn').on('mouseenter', event => { //When hover over each +1 button.
    $(event.currentTarget).addClass('btn-hover'); //Adds a class to change each style.
  }).on('mouseleave', event => { //When hover away from each +1 button.
    $(event.currentTarget).removeClass('btn-hover'); //Removes a class to bring back to default style.
  })
  
  $('.postText').on('keyup', event => { //When user lets go of key.
    let post = $(event.currentTarget).val(); //Value of textarea.
    let remaining = 140 - post.length; //Length of text from textarea.
    $('.characters').html(remaining); //Updates counter on page.

    if (remaining <= 0) { //If remaining letters is 0 or less.
    	$('.wordcount').addClass('red'); //Add class to turn text red.
    } else { //Else remaining characters is greater than 0.
    	$('.wordcount').removeClass('red'); //Removes class to bring back to default black text.
    }
  });
  
    $('.postText').focus(); //Textarea expects typed text as soon as the page loads.
}); 
