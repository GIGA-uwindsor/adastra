/*
 * Trigger logic for initializing and updating the game.
 */
function GameLogic(services) {
  var t = GFW.Trigger;
  var s = GFW.Standard;
  var game;
  var scene;
  var changeScene = [
  t.Trigger(
    t.Always(),
    function () {
      game = new Game();
      return scene;
    }
  )
  ];
  var scene = [
  t.Trigger(
    s.LastSubStep(services),
    function () {
      BasicGameView(game.getCtx(), game);
    }
  )
  ];
  return changeScene;
}

/*
 * State implementation of the game.
 */
function Game() {
  var canvas = document.getElementById('canvas');
  canvas.width = document.width;
  canvas.height = document.height;
  this.__ctx = canvas.getContext('2d');

  var stage = this.__stage = new Stage(document.getElementById("canvas"));
  stage.enableMouseOver();
  stage.mouseEnabled = true;
  
  this.__createGameBoard();
}

Game.prototype = {

  __createGameBoard: function() {
    // create tiles
		for (var i = 0; i < 20; ++i)
		{
      for (var j = 0; j < 7; ++j)
		  {
		 	  var t = createTile(128, 128, ""+i+j);
			  t.x = 30 + i * 132;
        t.y = 100 + j * 132;
        this.__stage.addChild(t);
		  }
    }
    
    // create some random planets
    var c = GFW.Container;
    this.__planets = [];
    for (var i = 0; i < 10; ++i) {
      var p = new Planet();
      
      var rx = Math.random()*1000 + 100;
      var ry = Math.random()*1000 + 100;
      var rpos = c.XYPair.fish(rx, ry);
      p.setPosition(rpos);
      c.XYPair.release(rpos);
      
      p.setRadius(30);
      p.setProduction(10);
      p.setShipCount(10);
      
      this.__planets.push(p);
    }
    
	},
  
  getPlanets: function() {
    return this.__planets;
  },
  
  getStage: function () {
    return this.__stage;
  },
  
  getCtx: function () {
    return this.__ctx;
  }

}