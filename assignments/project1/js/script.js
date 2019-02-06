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
let music = new Audio('assets/sounds/Berlin.mp3');

$(document).ready(function() {

  // Pause the music at the beginning
  music.pause();



// Handle when user mouses over game objects to drag it and make it draggable
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
          }
      if ($(this).attr('class').indexOf('ex') != -1) {
          $('#content').append('<div class="master ex"><img src="assets/images/ex.png" alt=""></div>');
          }
        // Now we can safely make the one we're dragging not the master
        $(this).removeClass('master');

    }
  });
});
});
