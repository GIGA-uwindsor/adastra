/*
 * Trigger logic for the main menu.
 */
function MainMenuLogic(services, assets, getGameScene) {
  var t = GFW.Trigger;
  var s = GFW.Standard;
  var mainMenu;
  var mainMenuLogic;
  var changeScene = [
  t.Trigger(
    t.Always(),
    function () {
      mainMenu = new MainMenu(services, assets);
      return mainMenuLogic;
    }
  )
  ]
  mainMenuLogic = [
  t.Trigger(
    t.BoolToAction(function () {
      return mainMenu.newGameButtonClicked();
    }),
    function () {
      return getGameScene();
    }
  ),
  t.Trigger(
    s.LastSubStep(services),
    function () {
      mainMenu.draw(services.getMainStep().getDelta());
    }
  )
  ]
  return changeScene;
}

/*
file:///Users/drakej/Code/GIGA/adastra/index.html
https://github.com/jashkenas/docco/blob/master/src/docco.coffee
http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modularjavascript
http://requirejs.org
http://www.phpied.com/3-ways-to-define-a-javascript-class/

*/

function MainMenu(services, assets) {

  this.__assets = assets;
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
  
  var title = new Text("Ad Astra:", "700 40px 'Droid Sans'", "#FFFFFF");
  title.x = width/2 - title.getMeasuredWidth()/2 - 60;
  title.y = 40;
  stage.addChild(title);
  
  var subtitle = new Text("Primitus", "700 40px 'Droid Sans'", "#FFFFFF");
  subtitle.x = width/2 - subtitle.getMeasuredWidth()/2 - 30;
  subtitle.y = title.y + subtitle.getMeasuredHeight() * 1.1;
  stage.addChild(subtitle);
  
  var starcounts = [75, 40, 30];
  for (var i in starcounts)
  {
    var stage2 = new Stage(canvas);
    this.__createStars(stage2, starcounts[i]);
    stars.push(stage2);
  }
  
  var ng = createTile(width/8, width/8, "New Game", assets.get("plus"));
  ng.x = width/6;
  ng.y = subtitle.y + subtitle.getMeasuredHeight() * 2.0;
  stage.addChild(ng);
  
  // route the event from EiselJS into the event buffer. we also have to
  // record the 
  ng.onClick = function(e) {
    e.timeStamp = Date.now();
    e.type = e.type + e.target.id;
    services.getEventBuffer().put(e);
  };
  this.__newGameButtonClicked = false;
  services.getEventDispatcher().addObserver("onClick" + ng.id, function (e) {
    this.__newGameButtonClicked = true;
  }.bind(this));
}

MainMenu.prototype = {

  newGameButtonClicked: function () {
    return this.__newGameButtonClicked;
  },

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