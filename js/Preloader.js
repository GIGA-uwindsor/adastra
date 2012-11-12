/*
 * Trigger logic for the preloader.
 */
function PreloadLogic(assetLoader, getNextState) {
  var t = GFW.Trigger;
  var preloadLogic;
  var changeScene = [
  t.Trigger(
    t.Always(),
    function () {
      preload(assetLoader);
      return preloadLogic;
    }
  )
  ]
  var preloadLogic = [
  t.Trigger(AllLoaded(assetLoader), getNextState)
  ]
  return changeScene;
}

/*
 * Action that passes when the AssetLoader has loaded all queued items.
 */
function AllLoaded(assetLoader) {
  return GFW.Trigger.BoolToAction(assetLoader.allLoaded.bind(assetLoader));
}

/*
 * Preloads all necessary assets.
 */
function preload(loader) {
  var images = ['img/plus.png'];
  loader.loadManifest(images);
  loader.loadFonts({
    google: {
      families: ['Germania One', 'Droid Sans:400,700']
    }
  });
}