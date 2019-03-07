"use strict";

//*****************

//Michael Watts
//extra special thanks to Sabine !!

// Store images in an array that will go to visionboard.html with their assigned tag
function populateVisionBoard(){
  //console.log("test");
  //...
  let storedImages = JSON.parse(localStorage.getItem("visionBoardImages"));
  console.log(storedImages);
  let imageList = document.getElementsByClassName("visionBoardFinal");
  for (let i = 0; i<storedImages.length;i++){
    imageList[i].src = storedImages[i];
  }
}
