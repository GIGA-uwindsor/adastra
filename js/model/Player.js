function Player() {
}
Player.prototype = {

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
   *
   */
  getName: function () {
    return this.__name;
  },
  setName: function (name) {
    this.__name = name;
  }
  
}