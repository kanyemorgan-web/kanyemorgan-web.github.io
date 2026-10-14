$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(130, 720, 220, 18, "darkslategray");
    createPlatform(370, 650, 140, 18, "black");
    createPlatform(560, 580, 150, 18, "darkslategray");
    createPlatform(820, 550, 120, 18, "black");
    createPlatform(620, 500, 140, 18, "darkslategray");
    createPlatform(390, 370, 150, 18, "black");
    createPlatform(220, 300, 140, 18, "darkslategray");
    createPlatform(430, 240, 150, 18, "black");
    createPlatform(670, 200, 120, 18, "darkslategray");
    
    
    

    // TODO 3 - Create Collectables
    createCollectable("diamond", 110, 680);
    createCollectable("max", 470, 580);
    createCollectable("grace", 790, 460);
    createCollectable("steve", 520, 280);
    createCollectable("database", 220, 180);
    createCollectable("kennedi", 680, 160);
    createCollectable("diamond", 860, 400);

    // TODO 4 - Create Cannons
    createCannon("top", 120, 1200);
    createCannon("right", 220, 1500);
    createCannon("top", 360, 1300);
    createCannon("top", 560, 1600);
    createCannon("right", 700, 1700);
    createCannon("top", 820, 1400);
    createCannon("right", 900, 1850);
    createCannon("top", 250, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
