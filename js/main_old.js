WebFont.load({
    google: {
      families: ['Germania One', 'Droid Sans:400,700']
    },

    active: function() 
    {
    	var images = ['img/plus.png'];
    	
		AdAstra.images = {};
		
    	preload = new PreloadJS();
    	preload.loadManifest(images, true);
    	preload.onFileLoad = function(event)
    	{
    		var img = event.result;
    		
    		var name = String(String(event.src).toLowerCase()).replace('img/', '').replace('.jpg','').replace('.png','');
    		
    		AdAstra.images[name] = img;
    		
    		console.log('Loaded ' + name);
    	};
    	preload.onError = function(event)
    	{

	    	console.log('File Error loading ' + event.src);
    	};
    	preload.onComplete = function(event)
    	{
	    	AdAstra.main();    	
    	};
    	
    	preload.load();
		
    },
    
  });


