"use strict";

/*****************

Title of Project: Earth Collage
Michael

This is a template. You must fill in the title,
author, and this description to match your project!


******************/


const data = []

let zIndex = 0;

// Class for series of questions
class EarthQuestion {
  constructor(question,answer,positiveA,negativeA,stamp) {
    this.question = question;
    this.answer = answer;
    this.positiveA = positiveA;
    this.negativeA = negativeA;
    this.stamp = stamp;
  }

  // Updates stamp function images
  update (stamp) {
    this.stamp = stamp;
  }

  //Draw images using stamp function, rotate and scale
  //  display (){
  //   push();
  //   translate(this.x,this.y);
  //   rotate(this.stampAngle);
  //   scale(this.stampSize);
  //   image(this.stampImage,0,0);
  //   pop();
  // }
}

data.push(new EarthQuestion("Are you from planet Earth?","Best planet of the universe!","true","false","mountain.png"));
data.push(new EarthQuestion("Is the earth flat?","phewf!","true","false","polarbear.png"));
data.push(new EarthQuestion("Do scientists agree on climate change?","A vast majority do","true","false","earth.png"));

// Set up for introduction to experience. The button click will engage video, soundscape
// and first question in the series
$(document).ready(function() {
  let i = 0;
  let txt = data[0].question;
  let speed = 100;
  let currentQuestion = 0;
  let currentStamp ;
  let questionNumber = 0;
  let voice = data[0].answer;
  let earthAnswer = 0;

  let video = document.getElementById("myVideo");
  let btn = document.getElementById("intro");
  let btnImg = document.getElementById("clickMe");
  let typebutton = document.getElementById("typebutton");
  typebutton.addEventListener("click",typeWriter);
  typebutton.style.display = "none";
  btnImg.addEventListener("click",gameStart);

  let checkBoxY = document.getElementById("myCheckY");
  checkBoxY.addEventListener("click",positiveA);
  let checkBoxN = document.getElementById("myCheckN");
  checkBoxN.addEventListener("click",negativeA);

  let stampContainer = document.getElementById("stampImage");

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

  // Earth will ask questions using type writer animation.
  function typeWriter() {
    typebutton.style.display = "none";
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Set up response for user... considered "positive" or Agree as a checkbox
  function positiveA() {
    console.log("checked");
    var checkBox = document.getElementById("myCheckY");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
    console.log(data[earthAnswer].answer);
    speakAnswer(data[earthAnswer].answer);
    currentStamp = "assets/images/"+data[questionNumber].stamp;
    stampContainer.src = currentStamp;
    $("#draggableImageContainer").css({ display:'block', zIndex: 1});
  }

// Set up response for user... considered "negative" or Disagree as a checkbox
  function negativeA() {
    var checkBox = document.getElementById("myCheckN");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
    console.log(data[earthAnswer].answer);
    speakAnswer(data[earthAnswer].answer);
    currentStamp = "assets/images/"+data[questionNumber].stamp;
    stampContainer.src = currentStamp;
    $("#draggableImageContainer").css({ display:'block', zIndex: 1});
  }

  // Handle when user mouses over game shapes to drag it and make it draggable
  // code - parts of Beach Party by Pippin Barr but altered code
  $('#content').on('mouseover', '.masterImage', function() {
    $(this).draggable({
      // The start property takes a function that is called when dragging starts
      start: function () {
        console.log (this);
      },
    });
  });

  $('#content').on('mouseup', '.masterImage', function () {
    console.log ("mouseup");
    //  $(this).draggable('disable');
    let previousPos = $(this).position();
    console.log(previousPos);

    //resets for the next question
    resetNextQuestion(previousPos);
    $('#draggableImageContainer').css({bottom: 0, left: 0, display:'none'});
  });


  // Calculates currrent question and then resets for the next question
  function resetNextQuestion(previousPos) {
    console.log( "in reset"+previousPos.top)
    i=0;
    let img = $('<img />').attr({
      'src': currentStamp,
    }).appendTo('#content').css({top: previousPos.top, left: previousPos.left, position:'absolute'});

    questionNumber++;
    //gameOver();
    txt = data[questionNumber].question;
    document.getElementById("demo").innerHTML ="";
    typeWriter();
  }

  function speakAnswer(earthVoice) {
    responsiveVoice.speak(earthVoice,'UK English Male');
    earthAnswer++;

  }



});
