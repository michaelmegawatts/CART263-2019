"use strict";

/*****************

CART 263-2019
Project 1
Title: BAUHAUS your life
Michael Watts

"BAUHAUS your life" is an endless collage experience to celebrate the 100th anniversary
of legendary Bauhaus. There is no end to design, so the user simply drags the
iconic Bauhaus shapes and makes some nice graphic art.

credits:
music - Mein Berlin (Aus "An und aus")
- Iwan Frank and Die Lieder von Walter Kollo in Originalaufnahmen

code - parts of Beach Party by Pippin Barr

// ******************/

// Load the Berlin music into a variable for atmosphere
let music = new Audio('assets/sounds/Berlin.mp3');

$(document).ready(function() {

  // Pause the music at the beginning. It will start when user drags red square, surprise!
  music.pause();

  // Effect for instruction dancer bounce when clicked
  $( document ).click(function() {
    $( ".instructions" ).effect( "bounce", "slow" );
  });
  // Effect for instruction dancer to magically fade away after bouncing
  $( document ).click(function() {
    $( ".instructions" ).fadeOut( "slow", function() {
      // Animation complete.
    });
    // Extra effect for title to highlight whenever user clicks anytime
    $( document ).click(function() {
      $( "#title" ).toggle( "highlight" );
    });
  });

  // Handle when user mouses over game shapes to drag it and make it draggable
  // Create "masters" of each game object to make a coper after each time one is dragged
  $('#content').on('mouseover', '.master', function () {
    $(this).draggable({
      // The start property takes a function that is called when dragging starts
      start: function () {
        console.log (this);
        // Create function for each object to be draggable
        if ($(this).attr('class').indexOf('bauhaus') != -1) {
          $('#content').append('<div class="master bauhaus"><img src="assets/images/bauhaus.png" alt=""></div>');
        }
        if ($(this).attr('class').indexOf('circle') != -1) {
          $('#content').append('<div class="master circle"><img src="assets/images/circle.png" alt=""></div>');
        }
        if ($(this).attr('class').indexOf('triangle') != -1) {
          $('#content').append('<div class="master triangle"><img src="assets/images/triangle.png" alt=""></div>');
        }
        if ($(this).attr('class').indexOf('square') != -1) {
          $('#content').append('<div class="master square"><img src="assets/images/square.png" alt=""></div>');
          // If it's currently paused, we should start it
          if (music.paused) {
            music.loop = true;
            music.play();
          }
        }
        if ($(this).attr('class').indexOf('ex') != -1) {
          $('#content').append('<div class="master ex"><img src="assets/images/ex.png" alt=""></div>');
        }
        // Remove master class from the dragged shape
        $(this).removeClass('master');

      }
    });
  });
});
