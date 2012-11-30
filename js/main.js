Crafty.scene("main", function ()
{
  Crafty.canvas.init();
  
  // Background
  var bg = (function (m) {
    var bg = new StarryBackground(Crafty.canvas._canvas);
    var lastFrameNO = Crafty.frame();
    m.callback = Crafty.bind("EnterFrame", function () {
      var df = Crafty.frame() - lastFrameNO;
      var dt = df * Crafty.timer.getFPS();
      bg.draw(dt);
      lastFrameNO = Crafty.frame();
    });
    return m;
  })({});
  

  // New Game button
  Crafty.load([Asset.plus], function ()
  {
    var newGame = Crafty.e("Tile")
      .tile(200, 200, "New Game", Asset.plus)
      .bind("Click", function ()
      {
        Crafty.scene("battle");
      });
    newGame.x = 50;
    newGame.y = 50;
  });

  // Set the background color
	Crafty.background("#000");

  var cx = Crafty.viewport.width/2;
  var cy = Crafty.viewport.height/2;

	// Title
  Crafty.e("2D, DOM, Text").attr({ w: 200, h: 40, x: cx - 100, y: cy - 20 })
    .text("Ad Astra:")
    .textFont({ weight: "700", size: "40px", family: "Germania One"})
    .css({ "text-align": "center", "color": "white" });

	// Subtitle
  Crafty.e("2D, DOM, Text").attr({ w: 100, h: 40, x: cx - 50, y: cy + 20 })
    .text("Primitus")
    .textFont({ weight: "700", size: "40px", family: "Germania One"})
    .css({ "text-align": "center", "color": "white" });
});
