function GUIButton() {
}
GUIButton.prototype = {

  /*
   * Position
   */
  getPosition: function (out) {
    out.setX(this.__rect.getX());
    out.setY(this.__rect.getY());
    return out;
  },
  setPosition: function (pos) {
    this.__rect.setX(pos.getX());
    this.__rect.setY(pos.getY());
  },
  
  /*
   * Extents
   */
  getRect: function (out) {
    return GFW_Rect.copyTo(this.__rect, out);
  },
  setRect: function (rect) {
    GFW_Rect.copyTo(rect, this.__rect); 
  }

}