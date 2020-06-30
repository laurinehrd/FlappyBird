function dessinemoi () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("bg-flappyBird");


// load images
  var pipeTop = new Image ();
  var pipeDown = new Image ();
  var bird = new Image ();
  var ground = new Image ();

  pipeTop.src = "images/tuyaux-top.png";
  pipeDown.src= "images/tuyaux-down.png";
  bird.src = "images/bird.png";
  ground.src = "images/ground.png";

// some variables
  var gap = 100;
  var constant = pipeTop.height+gap;
  var birdY = 150;
  var birdX = 100;

  var gravity = 1;
  var score = 0;

// audio files
  var fly = new Audio();
  var scor = new Audio ();
  var die = new Audio ();

  fly.src = "sounds/wing.mp3";
  scor.src = "sounds/point.mp3";
  die.src = "sounds/hit.mp3";


// faire remonter l'oiseau
  function moveUp(){
    birdY -= 25;
    fly.play();
  }


// tableau des valeurs des pipes
  var pipe = [];

// pipe obligatoire d'initialisation
  pipe[0] = {
    x : canvas.width,
    y : -400
  };


  function animation(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage (img, 0, 0, 1200, 600);

// boucle pour générer les pipes
    for(var i = 0; i < pipe.length; i++){

      ctx.drawImage (pipeTop, pipe[i].x, pipe[i].y);
      ctx.drawImage (pipeDown, pipe[i].x, pipe[i].y+constant);

// pour décrémenter la valeur de x
      pipe[i].x--;


// création d'un nouvel enregistrement (position) quand x atteind une certaine valeur
      if(pipe[i].x==600){
        pipe.push({
          x : canvas.width,
          y : pipeTop.height * (Math.random()) - pipeTop.height
        })
      }

// détection collision
      if( birdX + bird.width >= pipe[i].x && birdX <= pipe[i].x + pipeTop.width && (birdY <= pipe[i].y + pipeTop.height ||
        birdY+bird.height >= pipe[i].y+constant) || birdY + bird.height >= canvas.height-80){
        die.play()
        location.reload(); //rechargement de la page
        alert("GAME OVER");
      }

      if(pipe[i].x == 50){
        score++;
        scor.play();
      }

    }

    ctx.drawImage (ground, 0, canvas.height-80);
    ctx.drawImage (bird, birdX, birdY);


    birdY += gravity;

    document.getElementById("myCanvas");
    document.addEventListener("keydown", moveUp);

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,canvas.height-20);

    }

  setInterval(animation, 10);



}
