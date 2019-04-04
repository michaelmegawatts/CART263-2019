"use strict";

/*****************

Title of Project: Puzzle Earth
Michael

This is a template. You must fill in the title,
author, and this description to match your project!

button photo: https://unsplash.com/photos/BPiQ25xU6ak

******************/

//const data = [
  //{"question": 'string',
  //  "answers":[ 'strings',...]
//  }
//]


// Array for series of questions
let questions = [
  "Are you from planet Earth?",
  "Does climate change exist?",

]

// Array for things Earth will say when response is slow
let earthAnswerYes = [
  "Welcome to my body. I hope you're enjoying your stay",
  ]

// Set up for introduction to experience. The button click will engage video, soundscape
// and first question in the series
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
      //soundscape.play();
      video.loop = true;
      //soundscape.loop = true;
    } else {
      video.pause();
    }
    btn.style.display = "none";
    typebutton.style.display = "block";
  }

  // Earth will communicate using type writer animation. If there is no answer after 9 seconds

  function typeWriter() {
    typebutton.style.display = "none";
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    //else{
    //console.log("finished typing");
    //timer = setTimeout(gawdWaiting, 9000);
  }

  // Function for when user answers yes, and then Earth responds
//function earthAnswerYes(){
  //console.log("timer expired");

  //if ("answer-1" === ){
  //earthAnswerYes += 1;
  //responsiveVoice.speak(gawdSpeak[gawdWaitingSpeak], "UK English Female");
//  }
//

// set up for Responsive Voice


  // Calculates currrent question and then resets for the next question
  function resetNextQuestion() {
    i=0;
    currentQuestion += 1;
    gameOver();
    txt = questions[currentQuestion];
    document.getElementById("demo").innerHTML ="";
    typeWriter();
  }




});
