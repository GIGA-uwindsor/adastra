/*
 * Returned by server to indicate fleet movement.
 */
function FleetMoved() {
  this.__from = new XYPair();
  this.__to = new XYPair();
}
FleetMoved.prototype = {

  /*
   * From position
   */
  setFrom: function (from) {
    XYPair.copyTo(from, this.__from);
  },
  getFrom: function (out) {
    XYPair.copyTo(this.__from, out);
    return out;
  },
  
  /*
   * To position
   */
  setTo: function (to) {
    XYPair.copyTo(to, this.__to);
  },
  getTo: function (out) {
    XYPair.copyTo(this.__to, out);
    return out;
  },
  
  /*
   * Fleet ID
   */
  getFleet: function () {
    return this.__fleet;
  },
  setFleet: function (fleetID) {
    this.__fleet = fleetID;
  },

}

FleetMoved.fish = function () {
  return FleetMoved.__pool.fish();
}

FleetMoved.release = function (f) {
  FleetMoved.__pool.release(f);
}

Runtime.Init(function () {
  FleetMoved.__pool = new NodePool(FleetMoved, OfficialNodePool);
});