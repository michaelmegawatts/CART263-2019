"use strict";

/*****************

Title of Project: Conversation with Gawd
Michael Watts
extra special thanks to Sabine

Visuals created by Michael Watts
Soundscape: myNoise - Space Voyager, "Mission Seven"

//uses: ResponsiveVoice
//https://responsivevoice.org/

//uses: annyang
//https://www.talater.com/annyang/



******************/
let timer;
// Ambient sound for experience, will be engaged in the videoFunction when user
// clicks to begin
const soundscape = new Audio('assets/sounds/soundscape.mp3');
let visionBoardImage = [];

// Array for things Gawd will say

let gawdSpeak = [
  "Please repeat you answer",
  "What",
  "Can you read",
  "Are you still there",
  "I can not hear you",
  "Say that again",
  "Please speak more clearly, you are mumbling",
]

let gawdRude = [
  "Hit me baby one more poker face",
  "Are you certain about that?",
  "That is stupid",
  "How dare you",
  "I told you so",
  "Are you crazy?",
  "funny ha ha ha ha ha ha funny ha ha ha ha ha ha ha ha ha ha ha ha hilarious",
  "Oy you are so boring"
]

let gawdEvil = [
  "You bitch",
  "Crack is wack",
  "That is so so so stupid",
  "Fuck you you stupid wanker",
  "You big baby la la",
  "Get a life",
  "whatever",
  "funny ha ha ha ha ha ha funny ha ha ha ha ha shit ha ha ha ha ha hilarious",
  "Go to hell",
]


// Array for series of questions
let questions = [
  "What is your name? say, My name is ...",
  "Tell me your age? say, I am ...",
  "What country are you from? say I am from ...",
  "Do you like dogs or cats? say, I like ...",
  "Do you like red or blue? say, I like ...",
  "What is your favourite flower? say, My favourite flower is ...",
  "Do you prefer spaghetti or pizza? say, I prefer ...",
  "What kind of animal are you? say, I am a ... ",
  "Chocolate or vanilla icecream? say, I like ...",
  "Do you like bananas or pears? say, I like ...",
  "What is your astrological sign? say, I am ...",
  "Do you prefer Lady Gaga or Britney Spears? say, I prefer ...",
  "Are you male, female, or ... ? say, I am ...",
  "Are you generally happy, sad, angry, shy, boring, or an alien? say, I am ...",
  "Do you identify as vegetarian, omnivore, or cannibal? say, I am ...",
  "Are you usually early or late? say, I am ...",
  "Are you afraid of fire, spiders, or intimacy? say, I fear ... ",
  "What is something you hate? say, I hate ... (ex. cats)",
  "Are you sexy or ugly? Now be honest! say, I am ... ",
  "Do you like to hug, smile, or fart? say, I like to ...",
  "Who do you prefer? Mom or dad? say, I prefer ...",
  "Do you prefer to kiss boys or girls (of legal age)? say, I prefer ... ",
  "Have you ever stolen something? say, I stole ...",
  "Do you believe in Jesus, Satan, or Gawd :) ? say, I believe in ...",
  "Ok, then do you workshop Jesus, Satan, or Ru Paul? say, I worship Ru Paul",
  "Who is your favourite professor? Pippin, PippiN, or piPPin? say, Pippin ... (or die)",
  "Do you enjoy playing with guns, grenades, or witchcraft? say, I prefer ...",
  "What do you want your last meal to be? say, I want ... ",
  "What is your hallucinogen of choice? Mushrooms, acid, weed, molly, cocaine, or religion? say, I prefer ...",
  "What sibling is you least favourite? say, My ... ",
  "Wow, you sure are a piece of work. I think I can judge you now... press the button for my gift ↓↓↓ ",
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

  // Gawd will communicate using type writer animation. If there is no answer after 9 seconds
  // Gawd will speak a random impatient phrase
  function typeWriter() {
    typebutton.style.display = "none";
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else{
      console.log("finished typing");
      timer = setTimeout(gawdWaiting, 9000);
    }
  }

  // set up response to Gawd using images through flickr that will appear on screen
  let answerImageFunction = function(tag) {
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //$.getJSON(url);
    console.log(tag);
    $.getJSON( url, {
      tags:tag,
      tagmode: "any",
      format: "json"
    })
    .done(function( data ) {
      clearTimeout(timer);
      console.log(data.items[0].media.m);
      let responseImg = document.getElementById("responseImage");
      responseImg.src = data.items[0].media.m;
      visionBoardImage.push(data.items[0].media.m);
      localStorage.setItem("visionBoardImages", JSON.stringify(visionBoardImage));
        let storedImages = JSON.parse(localStorage.getItem("visionBoardImages"));
        console.log(storedImages);

      // Starting at question 10, a random and rude response from Gawd will play
      // from the string of responses
      if (currentQuestion >= 10) {
        let gawdRudeSpeak = Math.floor(Math.random() * gawdRude.length);
        responsiveVoice.speak(gawdRude[gawdRudeSpeak], "Australian Male");
      }

      if (currentQuestion >= 20) {
        let gawdEvilSpeak = Math.floor(Math.random() * gawdEvil.length);
        responsiveVoice.speak(gawdEvil[gawdEvilSpeak], "Australian Male");
      }

      //resets for the next question
      resetNextQuestion();
    });
  }

  // Function for when annyang does not recognize speech and causes experience to have silence
  // Gawd will speak a random phrase to ask for user to speak again
  function gawdWaiting(){
    console.log("timer expired");
    let gawdWaitingSpeak = Math.floor(Math.random() * gawdSpeak.length);
    responsiveVoice.speak(gawdSpeak[gawdWaitingSpeak], "Moldavian Female");
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
      'I hate *tag': answerImageFunction,
      'I fear *tag': answerImageFunction,
      'I like to *tag': answerImageFunction,
      'I stole *tag': answerImageFunction,
      'I believe in *tag': answerImageFunction,
      'I worship *tag': answerImageFunction,
      'Pippin *tag': answerImageFunction,
      'I want *tag': answerImageFunction,
      'My *tag': answerImageFunction,
    };

    // send commands to annyang
    annyang.addCommands(command);

    // annyang starts to listen with .start() function
    annyang.start();
  }

});
