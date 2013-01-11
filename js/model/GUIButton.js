function GUIButton() {
  this.__position = new XYPair();
}
GUIButton.prototype = {

  /*
   * Position
   */
  getPosition: function (out) {
    XYPair.copyTo(this.__position, out);
    return out;
  },
  setPosition: function (pos) {
    XYPair.copyTo(pos, this.__position);
  },
  
}

GUIButton.fish = function () {
  return GUIButton.__pool.fish();
}

GUIButton.release = function (f) {
  GUIButton.__pool.release(f);
}

Runtime.Init(function () {
  GUIButton.__pool = new NodePool(GUIButton, OfficialNodePool);
});