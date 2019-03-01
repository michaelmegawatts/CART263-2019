"use strict";

/*****************

Title of Project: Conversation with Gawd
Michael Watts

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
// Ambient sound for experience, will be engaged in the videoFunction when user
// clicks to begin
const soundscape = new Audio('assets/sounds/soundscape.mp3');
// Array for responses to god (annyang)
let answerToGod = [
  "dog",
  "cats",
]

// Array for series of questions
let questions = [
  "What is your name? say, My name is...",
  "Tell me your age? say, I am...",
  "What country are you from? say I am from...",
  "Do you like dogs or cats? say, I like...",
  "Do you like red or blue? say, I like...",
  "What is your favourite flower? say, My favourite is...",
  "Do you prefer spaghetti or pizza? say, I prefer...",
  "Chocolate or vanilla icecream? say, I like ...",
  "Do you like bananas or pears? say, I like...",
  "What is your astrological sign? say, I am ...",
  "Do you prefer Lady Gaga or Britney Spears? say, I prefer ...",
  "Are you male, female, or ... ? say, I am ...",
  "Are you generally happy, sad, angry, shy, boring, or an alien? say, I am ...",
  "Do you identify as vegetarian, omnivore, or cannibal? say, I am...",
]


// Set up for introduction to experience. The button click will engage video, soundscape
// and first question in the series that will come our like a typewriter
$(document).ready(function() {
  let i = 0;
  let currentQuestion = 0;
  let txt = questions[0];
  let speed = 100;
  //init the vars
  let video = document.getElementById("myVideo");
  let btn = document.getElementById("intro");
  let btnImg = document.getElementById("clickMe");
  let typebutton = document.getElementById("typebutton");
  typebutton.addEventListener("click",typeWriter);
  typebutton.style.display = "none";
  btnImg.addEventListener("click",gameStart);

  // function to play video and sound with a click for the introduction
  function gameStart(){
    if(video.paused){
      video.play();
      soundscape.play();
      video.loop = true;
      soundscape.loop = true;
    } else {
      video.pause();
    }
    btn.style.display = "none";
    typebutton.style.display = "block";
  }

  // god will speak using type writer animationd
  function typeWriter() {
    typebutton.style.display = "none";
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


  // set up response to god using images through flickr that will appear on screen
  let answerImageFunction = function(tag) {
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

      //resets for the next question
      resetNextQuestion();
    });
  }

  // Calculates currrent question and then resets for the next question
  function resetNextQuestion() {
    i=0;
    currentQuestion += 1;
    txt = questions[currentQuestion];
    document.getElementById("demo").innerHTML ="";
    typeWriter();
  }


  // set up for annyang
  if (annyang) {

    // Add the commands to annyang. That is it should listen
    // for "I am..." or "I'm..." followed by some number of words.
    // In annyang's commands an asterisk (*) followed by a
    // variable names means that annyang will call the function
    // specified with EVERYTHING it heard from that point on...
    var command = {
      'My name is *tag': answerImageFunction,
      'I am *tag': answerImageFunction,
      'I am from *tag': answerImageFunction,
      'I like *tag': answerImageFunction,
      'I enjoy *tag': answerImageFunction,
      'My favorite flower is *tag': answerImageFunction,
      'I prefer *tag': answerImageFunction,
      'It was *tag': answerImageFunction,

    };

    // Now we've defined the commands we give them to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();
  }



});
