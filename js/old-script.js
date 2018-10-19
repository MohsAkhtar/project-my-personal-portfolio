$(window).on('load', function() {
  // fading out loader then background for smooth transition
  $('.loader .inner').fadeOut(500, function() {
    $('.loader').fadeOut(750);
  });
});

$(document).ready(function() {
  //---SUPER SLIDES---
  $('#slides').superslides({
    animation: 'fade',
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
    play: 4000,
    pagination: false
  });

  //---TYPED---
  const typed = new Typed('.typed', {
    strings: ['Scroll down...'],
    typeSpeed: 80,
    startDelay: 1000,
    showCursor: false
  });

  const typedIntro = new Typed('.typedIntro', {
    strings: ['Hi, my name is Mohs Akhtar!', 'Welcome to my page'],
    typeSpeed: 60,
    backSpeed: 0,
    loop: false,
    startDelay: 1000,
    showCursor: false
  });

  //---SLICK---
  $('.slick').slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear'
  });

  //---SECTION OFFSETS---
  const skillsTopOffset = $('.skillsSection').offset().top;
  const statsTopOffset = $('.statsSection').offset().top;

  // boolean to stop 'countup' constantly firing off when we scroll
  let countUpFinished = false;

  $(window).scroll(function() {
    // animations execute when we reach the Y offset of a section + 200px

    //---EASY PIE CHART---
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.element)
            .find('.percent')
            .text(Math.round(percent));
        }
      });
    }

    //---COUNT UP---
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      // loop through elements, retrieve text, parse, set to endVal and use it for limit of 'countup'
      $('.counter').each(function() {
        const element = $(this);
        const endVal = parseInt(element.text());

        element.countup(endVal);
      });
      // stop countup from repeating when section is reached
      countUpFinished = true;
    }
  });

  //---FANCYBOX---
  $('[data-fancybox^="gallery"]').fancybox({
    loop: true,
    keyboard: true,
    arrows: true,
    padding: 0,
    thumbs: {
      autoStart: true
    },
    buttons: [
      'zoom',
      'share',
      'slideShow',
      'fullScreen',
      'download',
      'thumbs',
      'close'
    ]
  });

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

  //---NAVIGATION BAR SLIDE TO SECTION ON LINK CLICK---
  $('#navigation li a').click(function(e) {
    e.preventDefault();

    const targetElement = $(this).attr('href');
    const targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  });

  //---NAVIGATION BAR FIX TO TOP---
  // when navigation is at top it will be a fixed navigation bar
  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on('scroll', stickyNavigation);

  function stickyNavigation() {
    const body = $('body');

    // if we scroll past top of navbar
    if ($(window).scrollTop() >= navTop) {
      // add these pixels worth of height to stop the navbar jumping when fixed
      body.css('padding-top', nav.outerHeight() + 'px');
      body.addClass('fixedNav');
    } else {
      body.css('padding-top', 0);
      body.removeClass('fixedNav');
    }
  }
});
