function Planet() {
  this.__pos = new GFW.Container.XYPair();
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
    GFW.Container.xycopyTo(this.__pos, out);
    return out;
  },
  setPosition: function (pos) {
    GFW.Container.xycopyTo(pos, this.__pos);
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

Planet.__pool = new GFW.Container.Pool(Planet, GFW.Container.OfficialNodePool);