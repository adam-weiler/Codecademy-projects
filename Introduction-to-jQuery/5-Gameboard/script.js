var main = function() { //Runs when page is ready.
    $('.more-btn').on('click', event => { //When user clicks on more-btn link, toggles the more-menu list.
      $(event.currentTarget).siblings().toggle();
    });

    $('.share').on('click', event => { //When user clicks on .share list item, toggles the share-menu list.
      $(event.currentTarget).next().toggle();
    });

    $('.notification').on('click', event => { //When user clicks on .notification span, toggles 'active' class.
      $(event.currentTarget).toggleClass('active');
    });
};

$(document).ready(main);
