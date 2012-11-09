WebFont.load({
    google: {
      families: ['Germania One']
    },

    active: function() {
		var canvas = document.getElementById('mapcanvas');
		var context = canvas.getContext('2d');
		
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	
		var midx = canvas.width / 2;
		var midy = canvas.height / 2;
		
		context.font = "40px 'Germania One'";
		
		context.fillText("Ad Astra:", midx - 100, midy - 50);
		context.fillText("Primitus", midx - 60, midy);
    },
  });
