/*
 * Returned by server to indicate fleet movement.
 */
function FleetMovement() {
  this.__dest = new XYPair();
}
FleetMovement.prototype = {
  
  /*
   * Dest position
   */
  setDest: function (dest) {
    XYPair.copyTo(dest, this.__dest);
  },
  getDest: function (out) {
    XYPair.copyTo(this.__dest, out);
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

// TODO: waiting for GFW submodule
// Runtime.Init(function () { GFW_Mixin(FleetMovement, Order); });

FleetMovement.fish = function () {
  return FleetMovement.__pool.fish();
}

FleetMovement.release = function (f) {
  FleetMovement.__pool.release(f);
}

Runtime.Init(function () {
  FleetMovement.__pool
    = new NodePool(FleetMovement, OfficialNodePool);
});