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


// ******************/

// Load the Berlin music into a constant for atmosphere
// Load the bauhaus image into a variable to animate later
const music = new Audio('assets/sounds/Berlin.mp3');
let bauhausDrop = Math.floor(Math.random() * 10) +1;
let bauhausPlus = 0;

let triangleDrop = Math.floor(Math.random() * 15) +1;
let trianglePlus = 0;

$(document).ready(function() {

  // Pause the music at the beginning. It will start when user drags red square, surprise!
  // code - parts of Beach Party by Pippin Barr
  music.pause();

  // Effect for instruction dancer bounce when clicked
  $( ".instructions" ).click(function() {
    $( ".instructions" ).effect( "bounce", "slow" );
  });
  // Effect for instruction dancer to magically fade away after bouncing
  $( ".instructions" ).click(function() {
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
  // code - parts of Beach Party by Pippin Barr
  $('#content').on('mouseover', '.master', function () {
    $(this).draggable({
      // The start property takes a function that is called when dragging starts
      start: function () {
        console.log (this);
        // Create function for each object to be draggable
        if ($(this).hasClass("bauhaus")) {
          $('#content').append('<div class="master bauhaus"><img src="assets/images/bauhaus.png" alt=""></div>');
        }

        if ($(this).hasClass("circle")) {
          $('#content').append('<div class="master circle"><img src="assets/images/circle.png" alt=""></div>');
        }

        if ($(this).hasClass("triangle")) {
          $('#content').append('<div class="master triangle"><img src="assets/images/triangle.png" alt=""></div>');
        }
        if ($(this).hasClass("square")) {
          $('#content').append('<div class="master square"><img src="assets/images/square.png" alt=""></div>');
          // If it's currently paused, we should start it
          if (music.paused) { //code - parts of Beach Party by Pippin Barr
            music.loop = true;
            music.play();
          }
        }
        if ($(this).hasClass("ex")) {
          $('#content').append('<div class="master ex"><img src="assets/images/ex.png" alt=""></div>');
        }
        // Remove master class from the dragged shape
        $(this).removeClass('master');
        console.log($(this));
      },
      // Remove the master class of the dragged circle so user can click on circle and they will explode
      // leaving the master in place
      stop: function () {
        $(this).on("click", function () {
          if ($(this).hasClass("circle")) {
            $( ".circle:not(.master)" ).effect( "explode");
          }
        })

        // Create a random animation for all the bauhauses to fall off screen
        if ($(this).hasClass("bauhaus")) {
          bauhausPlus += 1
          if (bauhausDrop === bauhausPlus) {
            $( ".bauhaus:not(.master)" ).animate({ "top": "+=1200px" }, "slow" );
            bauhausPlus = 0;
            bauhausDrop = Math.floor(Math.random() * 10) +1;
          }
        }

        // Create a random animation for all the triangles to ascend up to the sky
        if ($(this).hasClass("triangle")) {
          trianglePlus += 1
          if (triangleDrop === trianglePlus) {
            $( ".triangle:not(.master)" ).animate({ "top": "-=1200px" }, "slow" );
            trianglePlus = 0;
            triangleDrop = Math.floor(Math.random() * 15) +1;
          }
        }

        // Create a random animation for all the exes to fade away
        $(this).on("click", function () {
          if ($(this).hasClass("ex")) {
            $( ".ex:not(.master)" ).effect( "puff");
          }
        })


      }

    });
  });
});
