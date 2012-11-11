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
		
		var title = new Text("Ad Astra:", "40px 'Germania One'", "#FFFFFF");
		title.x = AdAstra.width / 2 - title.getMeasuredWidth()/2 - 60;
		title.y = AdAstra.height / 2 - title.getMeasuredHeight()/2 - 60;
		AdAstra.stage.addChild(title);
		
		var subtitle = new Text("Primitus", "40px 'Germania One'", "#FFFFFF");
		subtitle.x = AdAstra.width/2 - subtitle.getMeasuredWidth()/2 - 30;
		subtitle.y = title.y + subtitle.getMeasuredHeight() * 1.1;
		AdAstra.stage.addChild(subtitle);
		
		
//		var hit = new Shape();
//		hit.graphics.beginFill("#000").drawRect(0, 0, subtitle.getMeasuredWidth(), subtitle.getMeasuredHeight());
//		subtitle.hitArea = hit;
//		
//		subtitle.onMouseOver = title.onMouseOver = function(evt)
//		{
//			evt.target.alpha = 1;
//		};
//
//		subtitle.onMouseOut = title.onMouseOut = function(evt)
//		{
//			evt.target.alpha = 0.5;
//		};		
		
		AdAstra.stage.update(); 
		
		Ticker.addListener(AdAstra.draw);
		Ticker.setInterval(1000.0/60.0);
		
		AdAstra.background1();
		AdAstra.background2();
		AdAstra.background3();

       
	},
	
	background1: function()
	{
		AdAstra.stars = new Stage(document.getElementById("canvas"));
		AdAstra.stars.autoClear = false;
		
		var g = new Graphics();
		var x = 0, y = 0;

		for (var a = 0; a < 75; a++)
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
		
		AdAstra.stars.addChild(shape1);
		
		AdAstra.stars.cache(0, 0, AdAstra.width, AdAstra.height, 1.0);
	
	},

	background2: function()
	{
		AdAstra.stars2 = new Stage(document.getElementById("canvas"));
		AdAstra.stars2.autoClear = false;
		
		var g = new Graphics();
		var x = 0, y = 0;

		for (var a = 0; a < 30; a++)
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
		
		AdAstra.stars2.addChild(shape1);
		
		AdAstra.stars2.cache(0, 0, AdAstra.width, AdAstra.height, 1.0);
	
	},
	
		background3: function()
		{
			AdAstra.stars3 = new Stage(document.getElementById("canvas"));
			AdAstra.stars3.autoClear = false;
			
			var g = new Graphics();
			var x = 0, y = 0;
	
			for (var a = 0; a < 30; a++)
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
			
			AdAstra.stars3.addChild(shape1);
			
			AdAstra.stars3.cache(0, 0, AdAstra.width, AdAstra.height, 1.0);
		
		},
	
	
	draw: function(dt)
	{
		AdAstra.stars.clear();
//		Console.log(dt);
		if (AdAstra.offset === undefined)
		{
			AdAstra.offset = 0;
		}
		
		if (AdAstra.offset2 === undefined)
		{
			AdAstra.offset2 = 0;
		}
		
		if (AdAstra.offset3 === undefined)
		{
			AdAstra.offset3 = 0;
		}
		
		var n = 60.0;
		AdAstra.offset += (AdAstra.width) * ((dt / 1000.0)/ n)
		if (AdAstra.offset > AdAstra.width)
			AdAstra.offset = 0;
		
		var os = AdAstra.offset;
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var w = AdAstra.width;
		var h = AdAstra.height;
		
		context.drawImage(AdAstra.stars.cacheCanvas, os, 0, w - os, h,
										 0, 0, w - os, h);
				
		if (os != 0)
			context.drawImage(AdAstra.stars.cacheCanvas, 0, 0, os, h,
			 								 w - os, 0, os, h);

// ========

		var n = 30.0;
		AdAstra.offset2 += (AdAstra.width) * ((dt / 1000.0)/ n)
		if (AdAstra.offset2 > AdAstra.width)
			AdAstra.offset2 = 0;
		
		var os = AdAstra.offset2;
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var w = AdAstra.width;
		var h = AdAstra.height;
		
		context.drawImage(AdAstra.stars2.cacheCanvas, os, 0, w - os, h,
										 0, 0, w - os, h);
				
		if (os != 0)
			context.drawImage(AdAstra.stars2.cacheCanvas, 0, 0, os, h,
			 								 w - os, 0, os, h);

// ======


		var n = 10.0;
		AdAstra.offset3 += (AdAstra.width) * ((dt / 1000.0)/ n)
		if (AdAstra.offset3 > AdAstra.width)
			AdAstra.offset3 = 0;
		
		var os = AdAstra.offset3;
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var w = AdAstra.width;
		var h = AdAstra.height;
		
		context.drawImage(AdAstra.stars3.cacheCanvas, os, 0, w - os, h,
										 0, 0, w - os, h);
				
		if (os != 0)
			context.drawImage(AdAstra.stars3.cacheCanvas, 0, 0, os, h,
			 								 w - os, 0, os, h);
		
		
		
//		AdAstra.stars.update();
		
		AdAstra.stage.update();
		
/*		var canvas = document.getElementById('mapcanvas');
		var context = canvas.getContext('2d');
		var dt = 0;
		
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
//		context.fillStyle = "rgb(0, 0, 0)";
//		context.fillRect(0, 0, canvas.width, canvas.height);

		
		if (AdAstra.time === undefined)
		{
			AdAstra.time = Date.now();
		}
		else {
			var d = Date.now();
			dt = (d - AdAstra.time) / 1000.0;
			AdAstra.time = d;
		}
		
		if (AdAstra.offset === undefined)
		{
			AdAstra.offset = 0;
		}
		
		if (AdAstra.stars !== undefined)
		{
			var n = 15.0;
			AdAstra.offset += (AdAstra.stars.width) * (dt / n)
			if (AdAstra.offset > AdAstra.stars.width)
				AdAstra.offset = 0;
				
			var os = AdAstra.offset;
			var w = AdAstra.stars.width;
			var h = AdAstra.stars.height;
				
//			context.putImageData(AdAstra.stars, 0, 0);
//		 	context.drawImage(AdAstra.stars, AdAstra.offset,  0);
			context.drawImage(AdAstra.stars, os, 0, w - os, h,
											 0, 0, w - os, h);
					
			if (os != 0)
				context.drawImage(AdAstra.stars, 0, 0, os, h,
				 								 w - os, 0, os, h);
			
		}
	
		var midx = canvas.width / 2;
		var midy = canvas.height / 2;
		
		context.font = "40px 'Germania One'";
		
		context.fillStyle = "rgb(255, 255, 255)";
		
		context.fillText("Ad Astra:", midx - 100, midy - 50);
		context.fillText("Primitus", midx - 60, midy);
		
		
		AdAstra.frame++;
		
		context.fillStyle = "rgb(255, 255, 255)";
		context.fillText("Frame: " + AdAstra.frame, 50, 50);
*/	
	}
}