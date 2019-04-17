"use strict";

/*****************

Title of Project: Earth Collage
Michael

This is a template. You must fill in the title,
author, and this description to match your project!


******************/


const data = []

let zIndex = 0;

// An array for video and website links in dialog boxes that will appear
let dialogBox = [
  "Look at me now!",
  "https://climate.nasa.gov/earth-now/",
  "Flat earthers are real. Just watch!",
  "https://www.youtube.com/watch?v=ecfqbWCiZSA",
  "Our leaders are climate change deniers. Don't believe me? Just watch!",
  "https://www.youtube.com/watch?v=ZqdYe2uyCLs",
  "Cats are jerks. Just watch",
  "https://www.youtube.com/watch?v=O1KW3ZkLtuo",
  "Sunbathing is sexy, just watch!",
  "https://www.youtube.com/watch?v=7CmFpkHIB9s",
  "Are you woke? Just watch!",
  "https://vimeo.com/276940268",
  "Farts are destroying the planet. Just watch!",
  "https://www.youtube.com/watch?v=26qzmw_xG58",
  "Do you actually know how to recycle? Just watch!",
  "https://www.youtube.com/watch?v=b7GMpjx2jDQ",
  "Canada's carbon tax: A guide to who’s affected, who pays what and who opposes it",
  "https://www.theglobeandmail.com/canada/article-canadas-carbon-tax-a-guide/",
];

let dialogboxSound = new Audio("assets/sounds/birds.mp3");

// Class for series of questions with answers, dialog boxes, links, and stamps
class EarthQuestion {
  constructor(question,answer,dialogboxtext,dialogboxlink,stamp) {
    this.question = question;
    this.answer = answer;
    this.dialogboxtext = dialogboxtext;
    this.dialogboxlink = dialogboxlink;
    this.stamp = stamp;

  }

  // Updates stamp function images
  update (stamp) {
    this.stamp = stamp;
  }
}

data.push(new EarthQuestion("Are you from planet Earth?","Best planet of the universe!","","","mountain.png"));
data.push(new EarthQuestion("Have you ever played in nature?","try and think of all those wonderful moments in nature","","","lakelouise.png"));
data.push(new EarthQuestion("Have you ever climbed a tree?","Trees are not just Christmas wrapping paper. They feed us oxygen","","","tree.png"));
data.push(new EarthQuestion("Do you like butterflies?","Butterflies go through a life cycle. A butterfly has four stages in its life cycle.A butterfly becoming an adult is called metamorphosis. The life cycle process can take a month to year.","","","butterfly.png"));
data.push(new EarthQuestion("Drinking fresh water is really good for your health","But not water from plastic bottles","","","freshwater.png"));
data.push(new EarthQuestion("Do you think Earth is a nice place?","even in the freezing winter, huh?",dialogBox[0],dialogBox[1],"spaceshiphouse.png"));
data.push(new EarthQuestion("Is it important to have clean air?","Clean air is fundamental to healthy human life","","","mask.png"));
data.push(new EarthQuestion("Is the earth flat?","phewf, you may continue to exist!",dialogBox[2],dialogBox[3],"flatearth.jpg"));
data.push(new EarthQuestion("Do humans cause climate change?","you bet!","","","adameve.png"));
data.push(new EarthQuestion("Only Liberals, Democrats, and tree huggers believe in climate change","Who knows. But sadly many conservatives and republicans deny climate change. Ask the Trump and Andrew Scheer","","","treehugger.png"));
data.push(new EarthQuestion("Is climate change a hoax?","The denial of climate change is not just ignorant, but malign and evil because it denies the human rights of the most vulnerable people on the planet",dialogBox[4],dialogBox[5],"denial.jpg"));
data.push(new EarthQuestion("Do you have pets?","So do I, but not cats. I don't like cats",dialogBox[6],dialogBox[7],"puppy.png"));
data.push(new EarthQuestion("Do scientists agree on climate change?","Yes, the vast majority of actively publishing climate scientists – 97 percent – agree that humans are causing global warming and climate change.","","","earth.png"));
data.push(new EarthQuestion("Do you enjoy eating tasty food?","Extra bacon please! gimme gimme gimme","","","burger.png"));
data.push(new EarthQuestion("Bees are so useless for the ecosystem, right?","As pollinators, bees play a part in every aspect of the ecosystem. They support the growth of trees, flowers, and other plants, which serve as food and shelter for creatures large and small","","","bee.png"));
data.push(new EarthQuestion("Is the sun causing global warming?","No. The Sun can influence the Earth’s climate, but it isn’t responsible for the warming trend we’ve seen over the past few decades.",dialogBox[8],dialogBox[9],"sun.png"));
data.push(new EarthQuestion("Is the ocean continuing to warm?","​Yes, the ocean is continuing to warm. Notably, all ocean basins have been experiencing significant warming since 1998, with more heat being transferred deeper into the ocean since 1990.","","","iceberg.png"));
data.push(new EarthQuestion("Should current generations care for the earth for future generations to come?","A baby boomer might say no, but we know they are wrong",dialogBox[10],dialogBox[11],"kid.png"));
data.push(new EarthQuestion("Is the ozone hole causing climate change?","Yes and no. The ozone hole is not causing global warming, but it is affecting atmospheric circulation","","","ozone.png"));
data.push(new EarthQuestion("Are cow farts causing climate change?","Yes. Animal farts and poop are major contributors to global warming. It turns out we might have been underestimating just how much",dialogBox[12],dialogBox[13],"cow.png"));
data.push(new EarthQuestion("Is it too late to prevent climate change?","Humans have caused major climate changes to happen already, and we have set in motion more changes still. Even if we stopped emitting greenhouse gases today, global warming would continue to happen for at least several more decades, if not centuries.","","","rabbit.png"));
data.push(new EarthQuestion("Are polar bears and other animals at risk because of global warming?","Because of melting sea ice, it is likely that more polar bears will soon starve, warns a new study that discovered the large carnivores need to eat 60 percent more than anyone had realized","","","polarbear.png"));
data.push(new EarthQuestion("Does recycling help climate change?","Recycling helps reduce greenhouse gas emissions by reducing energy consumption",dialogBox[14],dialogBox[15],"recycle.png"));
data.push(new EarthQuestion("Did dinosaurs cause climate change?","Well, yes! Like modern-day ruminants, giant plant-eating dinosaurs likely had microbes in their guts that gave off large amounts of methane, a potent greenhouse gas even more effective at trapping heat than carbon dioxide","","","dinosaur.png"));
data.push(new EarthQuestion("Will a carbon tax benefit society and the environment?","The idea behind a carbon tax is to make companies pay for greenhouse gas emissions that they ordinarily pump into the atmosphere for free",dialogBox[16],dialogBox[17],"carbontax.png"));
data.push(new EarthQuestion("The earth will be uninhabitable in 50 years","Wrong. We don't actually know but it doesn't mean we should ignore the consequences of our actions. There is only one Earth, and Mars isn't as sexy as Earth!","","","tomhardy.png"));

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

  let dialogBoxShow = data[0].dialogbox;
  $("#dialog").dialog(
    { close: function() {
        dialogboxSound.play();
        }
      }
    );
  $("#dialog").dialog("close");


  // Agree (Y) and Disagree (N) buttons are clickable
  let clickButtonY = document.getElementById("myClickY");
  clickButtonY.addEventListener("click",positiveA);
  let clickButtonN = document.getElementById("myClickN");
  clickButtonN.addEventListener("click",negativeA);
  clickButtonY.style.display = "none";
  clickButtonN.style.display = "none";

  // Contains the stamp for each image
  let stampContainer = document.getElementById("stampImage");


  // function to play video and sound with a click for the introduction
  function gameStart(){
    if(video.paused){
      video.play();
      video.loop = true;
    } else {
      video.pause();
    }
    btn.style.display = "none";
    typebutton.style.display = "block";
    clickButtonY.style.display = "block";
    clickButtonN.style.display = "block";
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

  // Set up response for user... considered Agree button
  function positiveA() {
    //console.log("clicked");
    var clickButton = document.getElementById("myClickY");
    var text = document.getElementById("text");

    //console.log(data[earthAnswer].answer);
    speakAnswer(data[earthAnswer].answer);
    currentStamp = "assets/images/"+data[questionNumber].stamp;
    stampContainer.src = currentStamp;
    $("#draggableImageContainer").css({ display:'block', zIndex: 1});

    if(data[questionNumber].dialogboxtext===""){
      console.log("hide")
      $("#dialog").dialog("close");
    }
    else {
      console.log(document.getElementById("dialogLink"));
      $("#dialog").dialog("open");
      document.getElementById("dialogDirection").innerHTML=data[questionNumber].dialogboxtext;
      document.getElementById("dialogLink").setAttribute("href",data[questionNumber].dialogboxlink);
    }
  }

  // Set up response for user... considered Disagree button
  function negativeA() {
    var clickButton = document.getElementById("myClickN");
    var text = document.getElementById("text");


    //console.log(data[earthAnswer].answer);
    speakAnswer(data[earthAnswer].answer);
    currentStamp = "assets/images/"+data[questionNumber].stamp;
    stampContainer.src = currentStamp;
    $("#draggableImageContainer").css({ display:'block', zIndex: 1});

    if(data[questionNumber].dialogboxtext===""){
      console.log("hide")
      $("#dialog").dialog("close");
    }
    else {
      console.log(document.getElementById("dialogLink"));
      $("#dialog").dialog("open");
      document.getElementById("dialogDirection").innerHTML=data[questionNumber].dialogboxtext;
      document.getElementById("dialogLink").setAttribute("href",data[questionNumber].dialogboxlink);
    }
  }

  // Handle draggable when user mouses over game shapes to drag it and make it draggable
  // code - parts of Beach Party by Pippin Barr but altered code
  $('#content').on('mouseover', '.masterImage', function() {
    $(this).draggable({
      // The start property takes a function that is called when dragging starts
      start: function () {
        //console.log (this);
      },
    });
  });

  $('#content').on('mouseup', '.masterImage', function () {
    //console.log ("mouseup");
    //
    let previousPos = $(this).position();
    //console.log(previousPos);


    //resets for the next question
    resetNextQuestion(previousPos);
    $('#draggableImageContainer').css({bottom: 0, left: 0, display:'none'});
  });


  // Calculates currrent question and then resets for the next question
  function resetNextQuestion(previousPos) {
    //console.log( "in reset"+previousPos.top)
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

  // Calls Earth voice to speak some truth about climate change with a fancy accent
  function speakAnswer(earthVoice) {
    responsiveVoice.speak(earthVoice,'UK English Male');
    earthAnswer++;
  }


});
