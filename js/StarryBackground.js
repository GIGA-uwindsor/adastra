
function StarryBackground(canvas) {

  this.__canvas = canvas;
  var stage = this.__stage = new Stage(canvas);
  stage.enableMouseOver();
	stage.autoClear = false;
  var stars = this.__stars = [];
  this.__rates = [60, 45, 20];
  this.__offsets = [0, 0, 0];
  
  var starcounts = [75, 40, 30];
  for (var i in starcounts)
  {
    var stage2 = new Stage(canvas);
    this.__createStars(stage2, starcounts[i]);
    stars.push(stage2);
  }
  
}

StarryBackground.prototype = {

  __createStars: function(stage, n)
	{
		stage.autoClear = false;
		
		var g = new Graphics();
		var x = 0, y = 0;
    var w = this.__canvas.width;
    var h = this.__canvas.height;

		for (var a = 0; a < n; a++)
		{
			x = Math.floor(Math.random() * w / 2) * 2;
			y = Math.floor(Math.random() * h / 2) * 2;

			g.beginFill(Graphics.getRGB(255, 255, 255));
			g.drawCircle(x, y, 1.5);
			g.endFill();
			
		}

		var shape1 = new Shape(g);
		shape1.x = 0;
		shape1.y = 0;
		
		stage.addChild(shape1);
		
		stage.cache(0, 0, w, h, 1.0);
	},

  __displayStar: function(i, dt)
	{
    var w = this.__canvas.width;
		var h = this.__canvas.height;
		var n = this.__rates[i];
		var o = this.__offsets[i];
		
		o += w * ((dt / 1000.0)/ n)
		if (o >= w)
			o = 0;
		
		var context = this.__canvas.getContext('2d');
		context.drawImage(this.__stars[i].cacheCanvas, o, 0, w - o, h,
										 0, 0, w - o, h);
				
		if (o != 0)
			context.drawImage(this.__stars[i].cacheCanvas, 0, 0, o, h,
			 								 w - o, 0, o, h);
			 								 
		this.__offsets[i] = o;
		
	},

	draw: function(dt)
	{
		this.__stage.clear();
		
		for (var i = 0; i < this.__stars.length; i++)
		{
			this.__displayStar(i, dt);
		}
				
		this.__stage.update();
  }
  
}