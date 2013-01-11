
function StarryBackground(canvas) {

  this.__canvas = canvas;
  var stage = this.__stage = new Stage(canvas);
  stage.enableMouseOver();
	stage.autoClear = false;
  var stars = this.__stars = [];
  this.__rates = [90, 60, 30, 10];
  this.__offsets = [0, 0, 0, 0];
  
  var starcounts = [120, 60, 30, 15];
  for (var i in starcounts)
  {
    var stage2 = new Stage(canvas);
    this.__createStars(stage2, starcounts[i], i);
    stars.push(stage2);
  }
  
}

StarryBackground.prototype = {

  /** 
    *
    *
    * level: The level the star is drawn at. A higher level means it is intended to be closer to the screen.
    */
  __createStars: function(stage, n, level)
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

      // luminosity
      var lum = 255 - ( ((this.__rates.length-1) - level)*20) - Math.floor(Math.random()*30);;
      var minLum = Math.max(lum-60, 60);
      
      if ( a % 17 == 0 )  // blue
        g.beginFill(Graphics.getRGB( minLum, minLum, 255));
      else if ( a % 19 == 0 ) // yellow
        g.beginFill(Graphics.getRGB( 255, 255, minLum));
      else if ( a % 23 == 0 ) // red
        g.beginFill(Graphics.getRGB( 255, minLum, minLum));
      else  // white
        g.beginFill(Graphics.getRGB( lum, lum, lum));
      
			g.drawCircle(x, y, (level/3)+1);
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