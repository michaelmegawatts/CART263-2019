"use strict";

/*****************

Title of Project: Puzzle Earth
Michael

This is a template. You must fill in the title,
author, and this description to match your project!

button photo: https://unsplash.com/photos/BPiQ25xU6ak
earth photo: https://www.nasa.gov/topics/earth/index.html
polar bear: https://defenders.org/climate-change/overview
******************/


const data = []


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
   display (){
    push();
    translate(this.x,this.y);
    rotate(this.stampAngle);
    scale(this.stampSize);
    image(this.stampImage,0,0);
    pop();
  }
}

data.push(new EarthQuestion("Are you from planet Earth?","Best planet of the universe!","true","false","earth.png"));
data.push(new EarthQuestion("Is the earth flat?","phewf!","true","false","polarbear.png"));

// Set up for introduction to experience. The button click will engage video, soundscape
// and first question in the series
$(document).ready(function() {
  let i = 0;
  let currentQuestion = 0;
  let txt = data[0].question;
//  let stampImage = data[0].Stamp;
  let currentStamp ;
  let speed = 100;

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

//stampContainer.src = currentStamp;
let questionNumber = 0;

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

  // Earth will communicate using type writer animation.

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
    console.log("checked");
    var checkBox = document.getElementById("myCheckY");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
       text.style.display = "block";
     } else {
        text.style.display = "none";
     }
     currentStamp = "assets/images/"+data[questionNumber].stamp;
     stampContainer.src = currentStamp;
         $("#draggableImageContainer").css({ display:'block'});
  }

  function negativeA() {
    var checkBox = document.getElementById("myCheckN");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
    currentStamp = "assets/images/"+data[questionNumber].stamp;
    stampContainer.src = currentStamp;
        $("#draggableImageContainer").css({ display:'block'});
  }

  // Handle when user mouses over game shapes to drag it and make it draggable
// code - parts of Beach Party by Pippin Barr but altered code

$('#content').on('mouseover', '.masterImage', function () {
    $(this).draggable({
      // The start property takes a function that is called when dragging starts
      start: function () {
        console.log (this);
        // Create function for each object to be draggable
        // if ($(this).hasClass("stamp")) {
        //   currentStamp = "assets/images/"+data[questionNumber].stamp;
        //   $('#content').append(' <div class="masterImage stamp"><img id = "stampImage" src="' + currentStamp+'" alt=""></div>');
        // }

        // Remove master class from the dragged shape
        // $(this).removeClass('masterImage');
        // console.log($(this));
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


/*function handleInput() {
  if(keyIsDown(RIGHT_ARROW)) {
    currentStamp.stampAngle += 0.1;
  }
  if(keyIsDown(UP_ARROW)) {
    currentStamp.stampSize += 0.1;
  }
  if(keyIsDown(DOWN_ARROW)) {
    currentStamp.stampSize -= 0.1;
  }
  if(keyIsDown(SHIFT)) {
    mushroomArray.push(new Mushroom(random(width),random(height),random(10),random(10),40,40));
  }
}

// mouseClick triggers envelope
function mouseClicked() {
  // is mouse over canvas?
}*/





  // Function for when user answers yes, and then Earth responds
//function earthAnswerYes(){
  //console.log("timer expired");

  //if ("answer-1" === ){
  //earthAnswerYes += 1;
  //responsiveVoice.speak(gawdSpeak[gawdWaitingSpeak], "UK English Female");
//  }
//

// set up for Responsive Voice






});
