Crafty.scene("battle", function ()
{
	var numPlanets = 10;
	for (var i = 0; i < numPlanets; ++i)
	{
		var planet = Crafty.e("Planet").attr({ x: Math.random() * 500, y: Math.random() * 500 });
	}
});
