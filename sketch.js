//declaring objects
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background, bgImg;

var Sword, swordTImg;

var fruit1, fruit1Img, fruit1G;

var fruit2, fruit2Img, fruit2G;

var fruit3, fruit3Img, fruit3G;

var fruit4, fruit4Img, fruit4G;

var fruit5, fruit5Img, fruit5G;

var fruit6, fruit6Img, fruit6G;

var gameOverImg, gameOver

var knifeSwooshSound, gameOverSound;

var score = 0;





function preload() {
  bgImg = loadImage("wf.jpg");

  gameOverImg = loadImage("skull-removebg-preview.png")

  swordImg = loadImage("sw.jpg");

  fruit1Img = loadImage("ap.png");

  fruit2Img = loadImage("ban.jpg");

  fruit3Img = loadImage("df.jpg");

  fruit4Img = loadImage("str.png");

  fruit5Img = loadImage("wat.jpg");

  fruit6Img = loadImage("to.jpg");


  knifeSwooshSound = loadSound("knifeSwooshSound.mp3");


  gameOverSound = loadSound("gameover.mp3")

}

function setup() {
  createCanvas(windowWidth, windowHeight);


  Sword = createSprite(190, 350, 30, 30);
  Sword.addImage(swordImg);
  Sword.scale = 0.3;
  Sword.debug = false;
  Sword.setCollider("rectangle", 0, 0, 200, 400);



  gameOver = createSprite(350, 250);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;




  fruit1G = new Group();

  fruit2G = new Group();

  fruit3G = new Group();

  fruit4G = new Group();

  fruit5G = new Group();

  fruit6G = new Group();



}

function draw() {


  background(bgImg);

  if (gameState === PLAY) {





    Sword.y = World.mouseY;
    //Sword.x = World.mouseX;

    var fruit = Math.round(random(1, 6));
    console.log(fruit)

    if (fruit == 1) {
      apple();
    } else if (fruit == 2) {
      banana();
    } else if (fruit == 3) {
      dragonF();
    } else if (fruit == 4) {
      strawB();
    } else if (fruit == 5) {
      tomato();
    }
    if (fruit1G.isTouching(Sword)) {
      fruit1G.destroyEach();
      score = score + 1;
      knifeSwooshSound.play();
    }
    if (fruit2G.isTouching(Sword)) {
      fruit2G.destroyEach();
      score = score + 1;
      knifeSwooshSound.play();
    }
    if (fruit3G.isTouching(Sword)) {
      fruit3G.destroyEach();
      score = score + 2;
      knifeSwooshSound.play();
    }
    if (fruit4G.isTouching(Sword)) {
      fruit4G.destroyEach();
      score = score + 2;
      knifeSwooshSound.play();
    }
    if (fruit5G.isTouching(Sword)) {
      fruit5G.destroyEach();
      score = score + 3;
      knifeSwooshSound.play();
    }
    if (fruit6G.isTouching(Sword)) {
      fruit6G.destroyEach();
      score = score + 3;
      knifeSwooshSound.play();
    }

    if (score >= 100) {
      gameState = END;
      gameOverSound.play();
    }


  } else if (gameState === END) {
    Sword.y = 300;
    Sword.x = 70;

    fruit1G.setVelocityXEach(0);
    fruit2G.setVelocityXEach(0);
    fruit3G.setVelocityXEach(0);
    fruit4G.setVelocityXEach(0);
    fruit5G.setVelocityXEach(0);
    fruit6G.setVelocityXEach(0);

    fruit1G.setLifetimeEach(-1);
    fruit2G.setLifetimeEach(-1);
    fruit3G.setLifetimeEach(-1);
    fruit4G.setLifetimeEach(-1);
    fruit5G.setLifetimeEach(-1);
    fruit6G.setLifetimeEach(-1);



    score = 0;
    gameOver.visible = true;

    fill(score / 10)
    textSize(20)
    text("Press ENTER To Start", 250, 550)

    if (keyDown("enter")) {
      gameState = PLAY;
    }


  }



  drawSprites();
  fill(rgb(Sword.x, Sword.y, 0))
  textSize(20);
  text("SCORE:" + score, 500, 30);




}

function apple() {
  if (frameCount % 40 === 0) {
    fruit1 = createSprite(1500, 10, 10, 10);
    fruit1.addImage(fruit1Img);
    fruit1.scale = 0.1;
    fruit1.velocityX = -(5 + 3 * score / 10);
    fruit1.y = Math.round(random(50, 450));
    fruit1.lifeTime = 50;
    fruit1.depth = gameOver.depth;
    gameOver.depth = gameOver.depth + 1;

    fruit1G.add(fruit1);


  }
}

function banana() {
  if (frameCount % 60 === 0) {
    fruit2 = createSprite(1500, 10, 10, 10);
    fruit2.addImage(fruit2Img);
    fruit2.scale = 0.1;
    fruit2.velocityX = -(5 + 4 * score / 10);
    fruit2.y = Math.round(random(50, 450));
    fruit2.lifeTime = 50;

    fruit2.depth = gameOver.depth;
    gameOver.depth = gameOver.depth + 1;
    fruit2G.add(fruit2);

  }
}

function dragonF() {
  if (frameCount % 100 === 0) {
    fruit3 = createSprite(1500, 10, 10, 10);
    fruit3.addImage(fruit3Img);
    fruit3.scale = 0.15;
    fruit3.velocityX = -(5 + 5 * score / 10);
    fruit3.y = Math.round(random(50, 450));
    fruit3.lifeTime = 50;

    fruit3.depth = gameOver.depth;
    gameOver.depth = gameOver.depth + 1;
    fruit3G.add(fruit3);

  }
}

function strawB() {
  if (frameCount % 150 === 0) {
    fruit4 = createSprite(1500, 10, 10, 10);
    fruit4.addImage(fruit4Img);
    fruit4.scale = 0.1;
    fruit4.velocityX = -(5 + 5 * score / 10);
    fruit4.y = Math.round(random(50, 450));
    fruit4.lifeTime = 50;
    fruit4.depth = gameOver.depth;
    gameOver.depth = gameOver.depth + 1;
    fruit4G.add(fruit4);
  }
}

function waterM() {
  if (frameCount % 180 === 0) {
    fruit5 = createSprite(1500, 10, 10, 10);
    fruit5.addImage(fruit5Img);
    fruit5.scale = 0.1;
    fruit5.velocityX = -(5 + 3 * score / 10);
    fruit5.y = Math.round(random(50, 450));
    fruit5.lifeTime = 50;
    fruit5.depth = gameOver.depth;
    gameOver.depth = gameOver.depth + 1;
    fruit5G.add(fruit5);

  }
}

function tomato() {
  if (frameCount % 200 === 0) {
    fruit6 = createSprite(1500, 10, 10, 10);
    fruit6.addImage(fruit6Img);
    fruit6.scale = 0.1
    fruit6.velocityX = -(5 + 3 * score / 10);
    fruit6.y = Math.round(random(50, 450))
    fruit6.lifeTime = 50;
    fruit6.depth = gameOver.depth;
    gameOver.depth = gameOver.depth + 1;
    fruit6G.add(fruit6);

  }
}