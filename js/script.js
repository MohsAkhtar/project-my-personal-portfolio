$(document).ready(function() {
  //---SUPER SLIDES---
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  //---TYPED---
  const typed = new Typed('.typed', {
    strings: [
      'Software Developer',
      'Web Developer',
      'Computer Science Graduate'
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  //---OWL CAROUSEL---
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    // responsive: {'screen size': {'no. items to display'}}
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
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
  $('[data-fancybox]').fancybox();

  //---ISOTOPE---
  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: linear,
      queue: false
    }
  });
});
