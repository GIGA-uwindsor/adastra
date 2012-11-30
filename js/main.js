Crafty.scene("main", function ()
{
	// Load the initial images
	Crafty.load(["img/plus.png"], function ()
	{
		var newGame = Crafty.e("Tile")
			.tile(128, 128, "New Game", "img/plus.png")
			.bind("Click", function ()
			{
				Crafty.scene("battle");
			});
	});

	Crafty.background("#000");

	// Title
    Crafty.e("2D, DOM, Text").attr({ w: 200, h: 40, x: 150, y: 120 })
            .text("Ad Astra:")
			.textFont({ weight: "700", size: "40px", family: "Droid Sans"})
            .css({ "text-align": "center", "color": "white" });

	// Subtitle
    Crafty.e("2D, DOM, Text").attr({ w: 100, h: 40, x: 150, y: 120 })
            .text("Primitus")
			.textFont({ weight: "700", size: "40px", family: "Droid Sans"})
            .css({ "text-align": "center", "color": "white" });
});
