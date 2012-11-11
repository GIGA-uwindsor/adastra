/*
file:///Users/drakej/Code/GIGA/adastra/index.html
https://github.com/jashkenas/docco/blob/master/src/docco.coffee
http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modularjavascript
http://requirejs.org
http://www.phpied.com/3-ways-to-define-a-javascript-class/

*/

var AdAstra = {

	main: function()
	{
		// Get a reference to the canvas object
		var canvas = document.getElementById('canvas');
		canvas.width = document.width;
		canvas.height = document.height;
		
		
		AdAstra.stage = new Stage(document.getElementById("canvas"));
		AdAstra.stage.enableMouseOver();
		
		AdAstra.stage.autoClear = false;
		
		AdAstra.width =  canvas.width;
		AdAstra.height = canvas.height;
		
		var title = new Text("Ad Astra:", "40px 'Droid Sans'", "#FFFFFF");
		title.x = AdAstra.width / 2 - title.getMeasuredWidth()/2 - 60;
//		title.y = AdAstra.height / 2 - title.getMeasuredHeight()/2 - 60;
		title.y = 40;
		AdAstra.stage.addChild(title);
		
		var subtitle = new Text("Primitus", "40px 'Droid Sans'", "#FFFFFF");
		subtitle.x = AdAstra.width/2 - subtitle.getMeasuredWidth()/2 - 30;
		subtitle.y = title.y + subtitle.getMeasuredHeight() * 1.1;
		AdAstra.stage.addChild(subtitle);
		
		AdAstra.stage.update(); 
		
		Ticker.addListener(AdAstra.draw);
		Ticker.setInterval(1000.0/60.0);
		
		AdAstra.stars = [];

		var starcounts = [75, 40, 30];
		AdAstra.rates = [60, 45, 20];
		AdAstra.offsets = [0, 0, 0];
		
		for (var i in starcounts)
		{
			var stage = new Stage(document.getElementById("canvas"));
			this.createStars(stage, starcounts[i]);
			AdAstra.stars.push(stage);
		}
	
		var g = new Graphics();
		g.beginStroke(Graphics.getRGB(0, 120, 152));
		g.beginFill(Graphics.getRGB(0, 154, 196));
		g.rect(0, 0, AdAstra.width / 8, AdAstra.width / 8);
		g.endFill();
		g.endStroke();
		var s = new Shape(g);
		s.x = AdAstra.width/6;
		s.y = subtitle.y + subtitle.getMeasuredHeight() * 2.0;
		
		AdAstra.stage.addChild(s);	
		
		var b = new Bitmap(AdAstra.images['plus']);
		b.x = s.x + 10;
		b.y = AdAstra.width / 8 + s.y - 10 - b.image.height;
//		console.log(b.image.height);
		AdAstra.stage.addChild(b);
		
		var text = new Text("New Game", "20px 'Droid Sans'", "#FFFFFF");
		text.x = s.x + AdAstra.width / 8 - text.getMeasuredWidth() - 5;
		text.y = s.y + 5;
		
		AdAstra.stage.addChild(text);
		
	},
	
	createStars: function(stage, n)
	{
		stage.autoClear = false;
		
		var g = new Graphics();
		var x = 0, y = 0;

		for (var a = 0; a < n; a++)
		{
			x = Math.floor(Math.random() * AdAstra.width / 2) * 2;
			y = Math.floor(Math.random() * AdAstra.height / 2) * 2;

			g.beginFill(Graphics.getRGB(255, 255, 255));
			g.drawCircle(x, y, 1.5);
			g.endFill();
			
		}

		var shape1 = new Shape(g);
		shape1.x = 0;
		shape1.y = 0;
		
		stage.addChild(shape1);
		
		stage.cache(0, 0, AdAstra.width, AdAstra.height, 1.0);
	},
	
	displayStar: function(i, dt)
	{
		var n = AdAstra.rates[i];
		var o = AdAstra.offsets[i];
		
		o += (AdAstra.width) * ((dt / 1000.0)/ n)
		if (o > AdAstra.width)
			o = 0;
		
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var w = AdAstra.width;
		var h = AdAstra.height;
		
		context.drawImage(AdAstra.stars[i].cacheCanvas, o, 0, w - o, h,
										 0, 0, w - o, h);
				
		if (o != 0)
			context.drawImage(AdAstra.stars[i].cacheCanvas, 0, 0, o, h,
			 								 w - o, 0, o, h);
			 								 
		AdAstra.offsets[i] = o;
		
	},

	
	draw: function(dt)
	{
		AdAstra.stage.clear();
		
		for (var i = 0; i < AdAstra.stars.length; i++)
		{
			AdAstra.displayStar(i, dt);
		}
				
		AdAstra.stage.update();
		
	}
}