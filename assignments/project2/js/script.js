"use strict";

/*****************

Title of Project
Michael Watts

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const soundscape = new Audio('assets/sounds/soundscape.mp3');

$(document).ready(function() {

  //init the vars
  let video = document.getElementById("myVideo");
  let btn = document.getElementById("intro");
  let btnImg = document.getElementById("clickMe");
  btnImg.addEventListener("click",myFunction);

  function myFunction(){

    if(video.paused){
      video.play();
      video.loop = true;

    } else {
      video.pause();

    }
      btn.style.display = "none";
  }

//
//   // Effect for instruction dancer to magically fade away after bouncing
//   $( "#intro").click(function() {
//    $( ".content" ).fadeOut( "slow", function() {
//     });
//
})
