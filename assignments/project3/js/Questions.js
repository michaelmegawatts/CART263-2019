
"use strict";

//*****************

//Michael Watts

// Questions and stamps


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
data.push(new EarthQuestion("Is the earth flat?","phewf, you may continue to exist!","true","false","flateartj.jpg"));
data.push(new EarthQuestion("Is climate change a hoax?","The denial of climate change is not just ignorant, but malign and evil because it denies the human rights of the most vulnerable people on the planet","true","false","denial.jpg"));
data.push(new EarthQuestion("Do scientists agree on climate change?","Yes, the vast majority of actively publishing climate scientists – 97 percent – agree that humans are causing global warming and climate change.","true","false","earth.png"));
data.push(new EarthQuestion("Is the sun causing global warming?","No. The Sun can influence the Earth’s climate, but it isn’t responsible for the warming trend we’ve seen over the past few decades.","true","false","sun.png"));
data.push(new EarthQuestion("Is the ocean continuing to warm?","​Yes, the ocean is continuing to warm. Notably, all ocean basins have been experiencing significant warming since 1998, with more heat being transferred deeper into the ocean since 1990.","true","false","iceberg.png"));
data.push(new EarthQuestion("Is the ozone hole causing climate change?","Yes and no. The ozone hole is not causing global warming, but it is affecting atmospheric circulation","true","false","ozone.png"));
data.push(new EarthQuestion("Is it too late to prevent climate change?","Humans have caused major climate changes to happen already, and we have set in motion more changes still. Even if we stopped emitting greenhouse gases today, global warming would continue to happen for at least several more decades, if not centuries.","true","false","adameve.png"));
data.push(new EarthQuestion("Are polar bears and other animals at risk because of global warming?","Because of melting sea ice, it is likely that more polar bears will soon starve, warns a new study that discovered the large carnivores need to eat 60 percent more than anyone had realized","true","false","polarbear.png"));
data.push(new EarthQuestion("Does recycling help climate change?","Recycling helps reduce greenhouse gas emissions by reducing energy consumption","true","false","recycle.png"));
// Set up for introduction to experience. The button click will engage video, soundscape
