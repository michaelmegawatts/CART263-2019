"use strict";

/*****************

Title of Project
Michael Watts

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const soundscape = new Audio('assets/sounds/soundscape.mp3');

let answerToGod = [
"dog",
"cats",
]

let showFlickr = function(tag) {
  //let url = 'https://api.flickr.com/services/rest/?tags='+tag;
   var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  //$.getJSON(url);
  console.log(tag);
  $.getJSON( url, {
   tags:tag,
   tagmode: "any",
   format: "json"
 })
   .done(function( data ) {
     console.log(data.items[0].media.m);
     let responseImg = document.getElementById("responseImage");
     responseImg.src = data.items[0].media.m;
});
}


$(document).ready(function() {
  let i = 0;
  let txt = 'Do you like dogs or cats?';
  let speed = 50;
  //init the vars
  let video = document.getElementById("myVideo");
  let btn = document.getElementById("intro");
  let btnImg = document.getElementById("clickMe");
  let typebutton = document.getElementById("typebutton");
  typebutton.addEventListener("click",typeWriter);
  btnImg.addEventListener("click",videoFunction);

  function videoFunction(){

    if(video.paused){
      video.play();
      video.loop = true;
    } else {
      video.pause();
    }
      btn.style.display = "none";
  }

  function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Make sure annyang is available...
  if (annyang) {

    // Add the commands to annyang. That is it should listen
    // for "I am..." or "I'm..." followed by some number of words.
    // In annyang's commands an asterisk (*) followed by a
    // variable names means that annyang will call the function
    // specified with EVERYTHING it heard from that point on...
    var command = {
    'I like *tag': showFlickr
    };

    // Now we've defined the commands we give them to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();
  }
});
