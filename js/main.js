window.onload = function () {
  var assetManager = new AssetManager();
  var assetLoader = new AssetLoader(assetManager);
  var services = new GFW.Standard.Services();
 
  var t = GFW.Trigger;
  var mainMenuLogic;
  var preloadLogic = PreloadLogic(assetLoader,
    function () { return mainMenuLogic; }
  );
  var mainMenuLogic = MainMenuLogic(services, assetManager,
    function () { return GameLogic(services); }
  );
  
  var start = t.Chain(preloadLogic);
  var interval = 1000/60;
  var maxTimeStep = 1000/60;
  var s = GFW.Standard;
  var gameLoop = new s.GameLoop(services, start, interval, maxTimeStep);
  gameLoop.run();
}

/*
 * Creates a square tile with optional text and background image.
 */
function createTile(w, h, text, bitmap)
{
  var c = new Container();
  
  // create border
  var g = new Graphics();
  g.beginStroke(Graphics.getRGB(0, 120, 152));
  g.beginFill(Graphics.getRGB(0, 154, 196));
  g.rect(0, 0, w, h);
  g.endFill();
  g.endStroke();
  var s = new Shape(g);
  s.x = 0;
  s.y = 0;
  
  c.addChild(s);
  
  if (text !== undefined)
  {
    var text = new Text(text, "20px 'Droid Sans'", "#FFFFFF");
    text.x = w - text.getMeasuredWidth() - 5;
    text.y = 5;
    c.addChild(text);
  }
  
  if (bitmap !== undefined)
  {
    var b = new Bitmap(bitmap);
    b.x = 10;
    b.y = h - 10 - b.image.height;
    
    c.addChild(b);
  }
  
  return c;
}