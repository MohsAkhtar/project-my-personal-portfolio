$(document).ready(function() {
  // init side nav
  $('.button-collapse').sideNav();

  // Init scrollspy
  $('.scrollspy').scrollSpy();

  //---ISOTOPE---
  // default filter (shows all)
  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 5000,
      easing: 'linear',
      queue: false
    }
  });
  // selecting anchor tags in filters
  $('#filters a').click(function() {
    // remove current from previous and add to this clicked anchor tag
    $('#filters .current').removeClass('current');
    $(this).addClass('current');

    // retrieve data-filter attribute from tag
    const selector = $(this).attr('data-filter');

    // isotope called again and filters to selected tag
    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 5000,
        easing: 'linear',
        queue: false
      }
    });

    // stops the anchor tag from performing default action
    return false;
  });
});
