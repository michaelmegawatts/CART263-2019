"use strict";

/*****************

CART 263-2019
Project 1
Michael Watts

Title: BAUHAUS your life

This is a template. You must fill in the title,
author, and this description to match your project!

// ******************/
// Load the Berlin music into a variable
let music = new Audio('sounds/Berlin.mp3');

$(document).ready(function() {

  // Pause the music at the beginning
  music.pause();

});

// Handle when user mouses over game objects to drag it and make it draggable
// Create "masters" of each game object to make a coper after each time one is dragged
$('#content').on('mouseover', '.master', function () {
  $(this).draggable({
    // The start property takes a function that is called when dragging starts
    start: function () {
      
      // Create function for each object to be draggable
      if ($(this).attr('class').indexOf('bauhaus') != -1) {
        $('#content').append('<div class="master bauhaus"></div>');

        //$( function() {
        //$( "#bauhaus" ).draggable();
        //} );

        $( function() {
          $( "#circle" ).draggable();
        } );

        $( function() {
          $( "#triangle" ).draggable();
        } );

        $( function() {
          $( "#square" ).draggable();
        } );

        $( function() {
          $( "#ex" ).draggable();
        } );

        // Now we can safely make the one we're dragging not the master
        $(this).removeClass('master');
      }
    }
  });
});
