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
		AdAstra.timeout = setInterval(this.draw, 1000.0/30.0);
		AdAstra.frame = 0;
		
		setTimeout(this.background, 250.0);
		
		window.onresize = this.background;
	},
	
	background: function()
	{
		var canvas = document.getElementById('mapcanvas');
		var buffer = document.createElement('canvas');
		buffer.width = canvas.width;
		buffer.height = canvas.height;
		
		var context = buffer.getContext('2d');
		context.fillStyle = "rgb(255, 255, 255)";
		context.clearRect(0, 0, buffer.width, buffer.height);
		

		context.fillStyle = "rgb(255, 255, 255)";
		
		for (var a = 0; a < 200; a++)
		{
			x = Math.floor(Math.random() * buffer.width / 2) * 2;
			y = Math.floor(Math.random() * buffer.height / 2) * 2;
			
			context.beginPath();
			context.arc(x, y, 1.5, 0, 2 * Math.PI, true);
			context.fill();
		}
		
		AdAstra.stars = buffer;
	
	},
	
	draw: function()
	{
		var canvas = document.getElementById('mapcanvas');
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
	
	}
}