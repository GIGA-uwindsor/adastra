function GameState() {
  this.__planets = [];
  this.__players = [];
  this.__fleets = [];
  this.__orders = [];
}
GameState.prototype = {

  /*
   * Planet queries
   */
  getPlanet: function (i) {
    return this.__planets[i];
  },
  
  addPlanet: function (p) {
    this.__planets.push(p);
  },
  
  getPlanetCount: function () {
    return this.__planets.length;
  },
  
  getPlanetsOfPlayer: function (pID, out) {
    var len = this.getPlanetCount();
    for (var i = 0; i < len; ++i) {
      var p = this.getPlanet(i);
      if (p.getOwner() == pID) {
        out.push(p);
      }
    }
    return out;
  },
  
  getPlanetByPoint: function (point) {
    var len = this.getPlanetCount();
    for (var i = 0; i < len; ++i) {
      var p = this.getPlanet(i);
      // TBI
      if (pointInCircle(point, p.getCircle())) {
        return p;
      }
    }
    return null;
  },
  
  /*
   * Player queries
   */
  getPlayer: function (i) {
    return this.__players[i];
  },
  
  addPlayer: function (p) {
    this.__players.push(p);
  },

  getPlayerCount: function () {
    return this.__players.length;
  },
  
  /*
   * Fleet queries
   */
  getFleet: function (i) {
    return this.__fleets[i];
  },
  
  addFleet: function (f) {
    this.__fleets.push(f);
  },
  
  getFleetCount: function () {
    return this.__fleets.length;
  },
  
  getFleetsOfPlayer: function (pID, out) {
    var len = this.getFleetCount();
    for (var i = 0; i < len; ++i) {
      var f = this.getFleet(i);
      if (f.getOwner() == pID) {
        out.push(f);
      }
    }
    return out;
  },
  
  getFleetByPoint: function () {
    var len = this.getFleetCount();
    for (var i = 0; i < len; ++i) {
      var f = this.getFleet(i);
      // TBI
      if (pointInCircle(point, f.getCircle())) {
        return f;
      }
    }
    return null;
  },
  
  /*
   * Order queries
   */
  getOrder: function (i) {
    return this.__orders[i];
  },
  
  addOrder: function (f) {
    this.__orders.push(f);
  },
  
  getOrderCount: function () {
    return this.__orders.length;
  },
  
  getOrdersOfPlayer: function (pID, out) {
    var len = this.getOrderCount();
    for (var i = 0; i < len; ++i) {
      var o = this.getOrder(i);
      if (o.getOwner() == pID) {
        out.push(o);
      }
    }
    return out;
  },
  
}