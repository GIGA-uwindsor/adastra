Crafty.c("Planet",
{
	init: function ()
	{
		this.requires("2D, DOM, Image");

    var that = this;
    Crafty.load([Asset.planet], function ()
    {
      that.image(Asset.planet);
    });
	},

	planet: function ()
	{
	}
});
