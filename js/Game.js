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
      game.draw();
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

  var stage = this.__stage = new Stage(document.getElementById("canvas"));
  stage.enableMouseOver();
  stage.mouseEnabled = true;
  
  this.__createGameBoard();
}

Game.prototype = {

  __createGameBoard: function() {		
		for (var i = 0; i < 20; ++i)
		 for (var j = 0; j < 7; ++j)
		 {
		 	var t = createTile(128, 128, ""+i+j);
			t.x = 30 + i * 132;
			t.y = 100 + j * 132;
			this.__stage.addChild(t);
		 }
	},
  
  draw: function () {
    this.__stage.update();
  }

}