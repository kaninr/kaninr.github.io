$(window).scroll(function () {

  // selectors
  var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();

$(document).ready(function () {

  $('.gallery').magnificPopup({

    type: 'ajax',
    // main options
    closeBtnInside: true,
    closeOnBgClick: true,
    closeOnContentClick: false,

    ajax: {
      midClick: true,
      alignTop: true,
      overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
    },

    mainClass: 'animated',
    removalDelay: 350


  });

  // Add it after jquery.magnific-popup.js and before first initialization code
  $.extend(true, $.magnificPopup.defaults, {
    tClose: '', // Alt text on close button
    tLoading: '', // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
      tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
      tNext: 'Next (Right arrow key)', // Alt text on right arrow
      tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
    },
    image: {
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
    },
    ajax: {
      tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
    }
  });

});