// Global variable to hold loaded assets.
// Maps asset name to asset url.
var Asset = {};

Crafty.scene("preload", function () {

  var assetDict = {};
  var loader = new AssetLoader(assetDict);

  var images = ['img/plus.png', 'img/planet.png'];
  loader.loadManifest(images);
  loader.loadFonts({
    google: {
      families: ['Germania One', 'Droid Sans:400,700']
    }
  });

  var cb = Crafty.bind("EnterFrame", function () {
    if (loader.allLoaded()) {
      for (assetName in assetDict) {
        var data = assetDict[assetName];
        if (data.hasOwnProperty("src")) {
          Asset[assetName] = data.src;
        }
      }
      Crafty.unbind("EnterFrame", cb);
      Crafty.scene("main");
    }
  });
  
});
