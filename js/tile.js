Crafty.c("Tile",
{
	init: function ()
	{
		this.requires("2D, DOM, Image, Text"); 
	},

	tile: function(text, image)
	{
		this.text(text);
		this.textFont({
			size: "20px",
			family: "Droid Sans"
		});
		this.css({ "color": "white" });
	}
});
