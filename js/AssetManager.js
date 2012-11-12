/*
 * AssetManager
 * Holds references to loaded assets, indexed by a unique name.
 */
function AssetManager() {
  this.set__assets({});
}

AssetManager.prototype = {

  /*
   * Adds an asset to the manager by the given name.
   */
  add: function(name, asset) {
    this.get__assets()[name] = asset;
  },
  
  /*
   * Removes reference to the asset.
   */
  remove: function(name) {
    delete this.get__assets()[name];
  },

  /*
   * Retrieves the asset by name. If the asset does not exist, an exception
   * is thrown.
   */
  get: function (name) {
    var asset = this.get__assets()[name];
    if (asset == undefined) {
      throw "cannot get asset '" + name + "': is undefined";
    }
    return asset;
  },
  
  /*
   * Returns true iff the manager has an asset by the given name.
   */
  has: function (name) {
    return this.get__assets().hasOwnProperty(name);
  }
  
}

GFW.property(AssetManager, "__assets");