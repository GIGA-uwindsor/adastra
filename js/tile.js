Crafty.c("Tile",
{
	init: function ()
	{
		this.requires("2D, Mouse"); 
	},

	tile: function(w, h, text, imagePath)
	{
		this.attr({ w: w, h: h });

		var bb = Crafty.e("2D, Canvas, Color")
			.color("#007898");
		bb.w = w;
		bb.h = h;
		this.attach(bb);

		var b = Crafty.e("2D, DOM, Color")
			.color("#009AC4");
		b.x = 1;
		b.y = 1;
		b.w = w-2;
		b.h = h-2;
		this.attach(b);

		if (text !== undefined)
		{
			var t = Crafty.e("2D, DOM, Text")
				.text(text)
				.textFont({
					size: "20px",
					family: "Droid Sans"
				})
				.css({ "color": "white", "text-align": "right" });
			t.x = -5;
			t.y = 5;
			t.w = w;
			t.z = 2;

			this.attach(t);
		}

		if (imagePath !== undefined)
		{
      var i = Crafty.e("2D, DOM, Image")
        .image(imagePath);
      i.x = 10; 	
      i.y = h - 10 - i.h;
      i.z = 1;
			this.attach(i);
		}

		return this;
	}
});
