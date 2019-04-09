"use strict";

/*****************

Title of Project: Puzzle Earth
Michael

This is a template. You must fill in the title,
author, and this description to match your project!

button photo: https://unsplash.com/photos/BPiQ25xU6ak
earth photo: https://www.nasa.gov/topics/earth/index.html
******************/


const data = []


// Class for series of questions
class EarthQuestion {
  constructor(question,answer,positiveA,negativeA,Stamp) {
    this.question = question;
    this.answer = answer;
    this.positiveA = positiveA;
    this.negativeA = negativeA;
    this.Stamp = Stamp;
  }
}

data.push(new EarthQuestion("Are you from planet Earth","Best planet of the universe!","true","false","earth.jpg"));
data.push(new EarthQuestion("Is the earth flat?","phewf!","true","false","earth.jpg"));

// Set up for introduction to experience. The button click will engage video, soundscape
// and first question in the series
$(document).ready(function() {
  let i = 0;
  let currentQuestion = 0;
  let txt = data[0].question;
  let stampImage = data[0].Stamp;
  let speed = 100;

  let video = document.getElementById("myVideo");
  let btn = document.getElementById("intro");
  let btnImg = document.getElementById("clickMe");
  let typebutton = document.getElementById("typebutton");
  let btnAnswer = document.getElementById("widget");
  typebutton.addEventListener("click",typeWriter);

  typebutton.style.display = "none";
  btnImg.addEventListener("click",gameStart);
  let checkBoxY = document.getElementById("myCheckY");
    checkBoxY.addEventListener("click",positiveA);
  let checkBoxN = document.getElementById("myCheckN");
    checkBoxN.addEventListener("click",negativeA);

  //btnAnswer.addEventListener("click",playerAnswer);
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

  function positiveA() {
    var checkBox = document.getElementById("myCheckY");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function negativeA() {
    var checkBox = document.getElementById("myCheckN");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
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
