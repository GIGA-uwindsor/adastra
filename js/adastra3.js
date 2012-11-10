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
		Ticker.setInterval(1000.0/40.0);
		
		AdAstra.background();

       
	},
	
	background: function()
	{
		AdAstra.stars = new Stage(document.getElementById("canvas"));
		AdAstra.stars.autoClear = false;
//		AdAstra.listStars = new Array();
		
		var g = new Graphics();
		var x = 0, y = 0;

		g.beginFill(Graphics.getRGB(255, 255, 255));
		g.drawCircle(0, 0, 1.5);
		g.endFill();
		
		var tweens = [];
				
		var shape = new Shape(g);	
		
		var func = function(e)
		{
			var s = e.target;
			
			s.x = AdAstra.width;	
			var t = Tween.get(s, {override: true, useTicks: false}).to({x:-10, y:s.y}, 15000.0)
				.call(func);
				
//			tweens.push(t);
			

		};		

		for (var a = 0; a < 100; a++)
		{
			x = Math.floor(Math.random() * AdAstra.width / 2) * 2;
			y = Math.floor(Math.random() * AdAstra.height / 2) * 2;

			var shape1 = shape.clone(false);
			shape1.x = x;
			shape1.y = y;
			
			var tween = Tween.get(shape1, {override: true, useTicks: false}).to({x:-10, y:y}, 15000.0 * (x / AdAstra.width))
				.call(func);
				
//			tweens.push(tween);
		
			AdAstra.stars.addChild(shape1);
			
			
		}

		AdAstra.stars.update();
		
	
	},
	
	draw: function()
	{
		AdAstra.stars.clear();
		AdAstra.stars.update();
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