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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var img = document.getElementById("myImg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
img.onclick = function () {
  modal.style.display = "block";
  $("body").addClass("modal-open");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  $("body").removeClass("modal-open")
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $("body").removeClass("modal-open")
  }
}