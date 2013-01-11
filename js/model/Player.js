function Player(id) {
  this.setID(id);
  this.setName("none");
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

Player.fish = function () {
  return Player.__pool.fish();
}

Player.release = function (f) {
  Player.__pool.release(f);
}

Runtime.Init(function () {
  Player.__pool = new NodePool(Player, OfficialNodePool);
});