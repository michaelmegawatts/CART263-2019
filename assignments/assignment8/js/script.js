"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

button photo: https://unsplash.com/photos/BPiQ25xU6ak

******************/




  // Set up for introduction to experience. The button click will engage video, soundscape
// and first question in the series
$(document).ready(function() {
  let i = 0;
  let currentQuestion = 0;
  //let txt = questions[0];
  let speed = 100;
  //init the vars
  let video = document.getElementById("myVideo");
  let btn = document.getElementById("intro");
  let btnImg = document.getElementById("clickMe");
  let typebutton = document.getElementById("typebutton");
  //typebutton.addEventListener("click",typeWriter);
  //typebutton.style.display = "none";
  btnImg.addEventListener("click",gameStart);

  // function to play video and sound with a click for the introduction
    function gameStart(){
      if(video.paused){
        video.play();
        //soundscape.play();
        video.loop = true;
        //soundscape.loop = true;
      } else {
        video.pause();
      }
      btn.style.display = "none";
      // typebutton.style.display = "block";
    }

  });
