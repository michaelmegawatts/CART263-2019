"use strict";

/*****************

Title of Project
Michael Watts

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const soundscape = new Audio('assets/sounds/soundscape.mp3');

$(document).ready(function() {

  // Effect for instruction dancer to magically fade away after bouncing
  $( "#intro").click(function() {
   $( ".content" ).fadeOut( "slow", function() {
    });

}
