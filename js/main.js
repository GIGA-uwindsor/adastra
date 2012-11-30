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

  // Plus thingie
  Crafty.e("2D, DOM, Image").attr({ w: 100, h: 100, x: 50, y: 50 })
  .image(Asset.plus);
  
	Crafty.background("#000");

	// Title
  Crafty.e("2D, DOM, Text").attr({ w: 200, h: 40, x: 125, y: 120 })
          .text("Ad Astra:")
    .textFont({ weight: "700", size: "40px", family: "Germania One"})
          .css({ "text-align": "center", "color": "white" });

	// Subtitle
  Crafty.e("2D, DOM, Text").attr({ w: 100, h: 40, x: 150, y: 160 })
          .text("Primitus")
    .textFont({ weight: "700", size: "40px", family: "Germania One"})
          .css({ "text-align": "center", "color": "white" });
});
