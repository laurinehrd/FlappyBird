function dessinemoi () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("bg-flappyBird");


// load images
  var pipeTop = new Image ();
  var pipeDown = new Image ();
  var bird = new Image ();

  pipeTop.src = "images/tuyaux-top.png";
  pipeDown.src= "images/tuyaux-down.png";
  bird.src = "images/bird.png";

  // some variables
  var gap = 100;
  var constant = pipeTop.height+gap;
  var birdY = 150;

// draw images
  //ctx.drawImage (pipeTop, 300, 0, 50, 250);
  //ctx.drawImage (pipeDown, 300, 0+constant, 50, 250);

// faire remonter l'oiseau
  function moveUp(){
    birdY -= 35;
  }


// pipe coordinates
  var pipe = []
  pipe [0] = {
    x : canvas.width;
    y : 0
  }



  function animation(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage (img, 0, 0, 1200, 600);
    ctx.drawImage (pipeTop, canvas.width/2-pipeTop.width/2,-500);
    ctx.drawImage (pipeDown, canvas.width/2-pipeTop.width/2, -500+constant);
    ctx.drawImage (bird, 0, birdY);
    birdY += gravity;

    document.getElementById("myCanvas");
    document.addEventListener("keydown", moveUp);


    }

  setInterval(animation, 10);

  var gravity = 1.5;

  var score = 0;
}
