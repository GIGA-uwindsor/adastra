/*
 * Functions that solve geometric questions.
 */

var Geometry = (function (m) {

/*
 * Returns true iff point lies within the axis-aligned bounding box.
 */
m.pointInAABB = function (p, aabb) {
  return p.getX() >= aabb.getX() && p.getY() >= aabb.getY()
      && p.getX() <= aabb.getRight() && p.getY() <= aabb.getBottom();
}

/*
 * Returns true iff point lies within the circle.
 */
m.pointInCircle = function (p, circle) {
  var dx = p.getX() - circle.getX();
  var dy = p.getY() - circle.getY();
  var m = dx*dx + dy*dy;
  return m <= (circle.getRadius() * circle.getRadius());
}

return m;
})({});

