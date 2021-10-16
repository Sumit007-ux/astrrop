function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  move = loadAnimation("images/move.png","images/move1.png")
  bath = loadAnimation("images/bath1.png","images/bath2.png")
  }

  function setup() {
  createCanvas(1400,800);
  createSprite(400, 200, 50, 50);
   

  astronaut = createSprite(700,400)
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1


    }

 



function draw() {
  background(255,255,255);
  image(bg, 0, 0, width, height);
  
  astronaut.display();  

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 1
    astronaut.velocityY = 0
  }
    if(keyDown("DOWN_ARROW")){
     astronaut.addAnimation("gymming",gym);
     astronaut.changeAnimation("gymming");
     astronaut.y = 300;
     astronaut.velocityX = 0
     astronaut.velocityY = 0
    }
     if(keyDown("LEFT_ARROW")){
       astronaut.addAnimation("eating",eat);
       astronaut.changeAnimation("eating");
       astronaut.y = 250;
       astronaut.velocityX = -1
       astronaut.velocityY = 0
     }
       if(keyDown("RIGHT_ARROW")){
         astronaut.addAnimation("bathing",bath);
         astronaut.changeAnimation("bathing");
         astronaut.velocityX = 0
         astronaut.velocityY = 0
       }

  drawSprites();
      }
    
  