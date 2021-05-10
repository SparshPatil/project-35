var balloon;

function preload()  {
bgImage = loadImage("Hot Air Ballon-01.png")
balloonImage = loadAnimation("Hot Air Ballon-02.png")
balloonImage1 = loadAnimation("Hot Air Ballon-03.png")
balloonImage2 = loadAnimation("Hot Air Ballon-04.png")


}


function setup() {
  createCanvas(500,500);
  db = firebase.database();

  balloon = createSprite(250,250,10,10);
  balloon.addAnimation ("hot air balloon",balloonImage)
  balloon.scale=0.5;
  dbballoon = db.ref('balloon/position');
  dbballoon.on("value",readPosition);

  
}

function draw() {
  background(bgImage);
  if(keyDown(LEFT_ARROW)) {
    updateHeight(-10,0);
    balloon.addAnimation ("hot air balloon",balloonImage);

    }
    else if(keyDown (RIGHT_ARROW)){
      updateHeight(10,0);
      balloon.addAnimation ("hot air balloon",balloonImage);

    }
    else if(keyDown (UP_ARROW)) {
      updateHeight(0,-10);
      balloon.addAnimation ("hot air balloon",balloonImage);
     balloon.scale=balloon.scale-0.01;
    }
    else if (keyDown (DOWN_ARROW)) {
      updateHeight(0,10);
      balloon.addAnimation ("hot air balloon",balloonImage);
      balloon.scale=balloon.scale+0.01;
    }
  
  drawSprites();

}

function updateHeight(x,y){
  db.ref('balloon/position').set({
  'x': position.x + x,
  'y': position.y + y
  })
  }
  function readPosition(data) {
    position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
  }
 