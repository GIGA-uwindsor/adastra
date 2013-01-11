function Planet(id) {
  setID(id);
  setOwner(-1);
  setShipCount(0);
  this.__pos = new XYPair();
  setRadius(4);
}
Planet.prototype = {

  /*
   * ID
   */
  getID: function () {
    return this.__id;
  },
  setID: function (id) {
    this.__id = id;
  },
  
  /*
   * Owner
   */
  getOwner: function () {
    return this.__owner;
  },
  setOwner: function (id) {
    this.__owner = id;
  },
  
  /*
   * Ship count
   */
  getShipCount: function () {
    return this.__shipCount;
  },
  setShipCount: function (number) {
    this.__shipCount = number;
  },
  
  /*
   * Position
   */
  getPosition: function (out) {
    XYPair.copyTo(this.__pos, out);
    return out;
  },
  setPosition: function (pos) {
    XYPair.copyTo(pos, this.__pos);
  },
  
  /*
   * Production
   */
  getProduction: function () {
    return this.__production;
  },
  setProduction: function (production) {
    this.__production = production;
  },

  /*
   * Radius
   */
  getRadius: function () {
    return this.__radius;
  },
  setRadius: function (radius) {
    this.__radius = radius;
  },
  
}

Planet.fish = function () {
  return Planet.__pool.fish();
}

Planet.release = function (f) {
  Planet.__pool.release(f);
}

Runtime.Init(function () {
  Planet.__pool = new NodePool(Planet, OfficialNodePool);
});