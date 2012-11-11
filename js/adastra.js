/*
file:///Users/drakej/Code/GIGA/adastra/index.html
https://github.com/jashkenas/docco/blob/master/src/docco.coffee
http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modularjavascript
http://requirejs.org
http://www.phpied.com/3-ways-to-define-a-javascript-class/

*/

function MainMenu() {
  var canvas = document.getElementById('canvas');
  canvas.width = document.width;
  canvas.height = document.height;
  var stage = this.__stage = new Stage(canvas);
  stage.enableMouseOver();
	stage.autoClear = false;
  var width = this.__width = canvas.width;
  var height = this.__height = canvas.height;
  var stars = this.__stars = [];
  this.__rates = [60, 45, 20];
  this.__offsets = [0, 0, 0];
  
  var title = new Text("Ad Astra:", "40px 'Germania One'", "#FFFFFF");
  title.x = width/2 - title.getMeasuredWidth()/2 - 60;
  title.y = height/2 - title.getMeasuredHeight()/2 - 60;
  stage.addChild(title);
  
  var subtitle = new Text("Primitus", "40px 'Germania One'", "#FFFFFF");
  subtitle.x = width/2 - subtitle.getMeasuredWidth()/2 - 30;
  subtitle.y = title.y + subtitle.getMeasuredHeight() * 1.1;
  stage.addChild(subtitle);
  
  var starcounts = [75, 40, 30];
  for (var i in starcounts)
  {
    var stage = new Stage(canvas);
    this.__createStars(stage, starcounts[i]);
    stars.push(stage);
  }
  
  var g = new Graphics();
  g.beginFill(Graphics.getRGB(0, 0, 255));
  g.rect(0, 0, width/8, width/8);
  var s = new Shape(g);
  s.x = width/4;
  s.y = height/4*3;
  
  stage.addChild(s);
}

MainMenu.prototype = {

  __createStars: function(stage, n)
	{
		stage.autoClear = false;
		
		var g = new Graphics();
		var x = 0, y = 0;

		for (var a = 0; a < n; a++)
		{
			x = Math.floor(Math.random() * this.__width / 2) * 2;
			y = Math.floor(Math.random() * this.__height / 2) * 2;

			g.beginFill(Graphics.getRGB(255, 255, 255));
			g.drawCircle(x, y, 1.5);
			g.endFill();
			
		}

		var shape1 = new Shape(g);
		shape1.x = 0;
		shape1.y = 0;
		
		stage.addChild(shape1);
		
		stage.cache(0, 0, this.__width, this.__height, 1.0);
	},

  __displayStar: function(i, dt)
	{
		var n = this.__rates[i];
		var o = this.__offsets[i];
		
		o += (this.__width) * ((dt / 1000.0)/ n)
		if (o > this.__width)
			o = 0;
		
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var w = this.__width;
		var h = this.__height;
		
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