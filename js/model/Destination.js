/*
 * Position destination
 */
function PositionDestination() {
  this.__dest = new XYPair();
}
PositionDestination.prototype = {
  
  get: function (from, out) {
    XYPair.copyTo(this.__dest, out);
    return out;
  },
  
  set: function (dest) {
    XYPair.copyTo(dest, this.__dest);
  }
  
}

/*
 * Planet destination
 */
function PlanetDesination() {
}
PlanetDestination.prototype = {

  /*
   * Get nearest position on the planet's surface
   */
  get: function (from, out) {
    var planetPos = this.__planet.getPosition(XYPair.fish());
    nearestSurfacePoint(
      planetPos, this.__planet.getRadius(), from, out
    );
    XYPair.release(planetPos);
    return out;
  },
  
  set: function (planet) {
    this.__planet = planet;
  }

}

/*
 * Fleet destination
 */
function FleetDestination() {
}
FleetDestination.prototype = {

  /*
   * Get nearest position on the planet's surface
   */
  get: function (from, out) {
    var fleetPos = this.__fleet.getPosition(XYPair.fish());
    nearestSurfacePoint(
      fleetPos, this.__fleet.getRadius(), from, out
    );
    XYPair.release(fleetPos);
    return out;
  },
  
  set: function (fleet) {
    this.__fleet = fleet;
  }
}

/*
 * Given a point, calculates the nearest point on the perimeter
 * of the circle. point != centre
 */
function nearestSurfacePoint(centre, radius, point, out) {
  var fromToCentre = XYPair.sub(centre, point, XYPair.fish());
  var d = XYPair.normalize(fromToCentre, XYPair.fish());
  var t1 = XYPair.fish();
  XYPair.add(centre,
    XYPair.mul(radius, d, t1),
    out
  );
  XYPair.release(fromToCentre);
  XYPair.release(d);
  XYPair.release(t1);
  return out;
}