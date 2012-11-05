function Fleet() {
  this.__pos = new XYPair();
}
Fleet.prototype = {

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
  }

}