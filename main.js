img = '';
status = '';

function preload(){
    img = loadImage('dog_cat.jpg');
    
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    ObjectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";


}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("Dog",45,75);
     noFill();
     stroke("red");
     rect(30,60,450,350);

     fill("red");
     text("Cat",320,120);
      noFill();
      stroke("red");
      rect(300,90,270,320);
}

function modelLoaded(){
    console.log("Model is Loaded");
    status = true;
    ObjectDetector.detect(img,gotResult);

}

function gotResult(results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
  }
}