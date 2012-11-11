window.onload = function () {
  WebFont.load({
    google: {
      families: ['Germania One']
    },

    active: function() 
    {
    	preloadComplete();
    },
    
  });
}

function preloadComplete() {
  var mainMenu = new MainMenu();
  var services = new GFW.Standard.Services();
  var draw = function () {
    mainMenu.draw(services.getTime().getDelta());
  }
  var logic = function () {}
  var gameLoop = new GFW.Standard.GameLoop(services, logic, draw, 1000/60, 5);
  gameLoop.run();
}