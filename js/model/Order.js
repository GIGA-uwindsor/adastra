function Order() {
  setID(0);
}
Order.prototype = {
  
  /*
   * ID
   */
  getID: function () {
    return this.__id;
  },
  setID: function (id) {
    this.__id = id;
  },
  
}