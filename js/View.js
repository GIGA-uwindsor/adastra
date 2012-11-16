/*
 * Draws default view of a planet.
 */
function BasicPlanetView(ctx, planet) {
  var c = GFW.Container;
  var pos = c.XYPair.fish();
  var p = planet;
  p.getPosition(pos);
  ctx.beginPath();
  ctx.arc(pos.getX(), pos.getY(), p.getRadius(), 0, 2*Math.PI, false);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#000000";
  ctx.stroke();
  ctx.closePath();
  c.XYPair.release(pos);
}

/*
 * Draws default view of the game.
 */
function BasicGameView(ctx, gameState, drawPlanet) {
  if (drawPlanet === undefined) drawPlanet = BasicPlanetView;
  
  gameState.getStage().update();
  
  var planets = gameState.getPlanets();
  for (i in planets) {
    drawPlanet(ctx, planets[i]);
  }
}