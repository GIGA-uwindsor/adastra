Crafty.scene("main", function ()
{
	// Load the initial images
	Crafty.load(["img/plus.png"], function ()
	{
		Crafty.e("2D, DOM, Image").attr({ w: 100, h: 100, x: 50, y: 50 })
			.image("img/plus.png");
	});

	Crafty.background("#000");

	// Title
    Crafty.e("2D, DOM, Text").attr({ w: 100, h: 40, x: 150, y: 120 })
            .text("Ad Astra:")
			.textFont({ weight: "700", size: "40px", family: "Droid Sans"})
            .css({ "text-align": "center", "color": "white" });

	// Subtitle
    Crafty.e("2D, DOM, Text").attr({ w: 100, h: 40, x: 150, y: 120 })
            .text("Primitus")
			.textFont({ weight: "700", size: "40px", family: "Droid Sans"})
            .css({ "text-align": "center", "color": "white" });
});
