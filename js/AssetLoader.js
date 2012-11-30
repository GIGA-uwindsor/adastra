/*
 * Manages and monitors the loading of assets.
 * Loaded items are automatically inserted into the AssetDict.
 */
function AssetLoader(dict) {
  this.__preloadjs = new PreloadJS();
  this.__preloadjs.onFileLoad = this.__preloadjsOnFileLoad.bind(this);
  this.__preloadjs.onError = this.__preloadjsOnError.bind(this);
  this.__assetDict = dict;
  
  // universal loading tracking
  this.__errors = {};
  this.__loading = {};
  
  // tracks WebFont loading
  this.__fontsLoading = false;
  this.__numFontsLoading = 0;
  
  // tracks PreloadJS loading
  this.__numItemsLoading = 0;
}

AssetLoader.prototype = {

  anyLoading: function () {
    if (this.__numFontsLoading == 0) {
      this.__fontsLoading = false;
    }
    return this.__fontsLoading || (this.__numItemsLoading > 0);
  },
  
  allLoaded: function () {
    return !this.anyLoading() && !this.anyFailed();
  },
  
  anyFailed: function () {
    for (i in this.__errors) return true;
    return false;
  },
  
  failed: function (item) {
    return this.__errors.hasOwnProperty(item);
  },
  
  loaded: function (item) {
    return this.__assetDict.hasOwnProperty(item);
  },
  
  loading: function (item) {
    return this.__loading.hasOwnProperty(item);
  },

  forget: function (item) {
    delete this.__errors[item];
  },
  
  forgetAll: function () {
    this.__errors = {};
  },
  
  /*
   * Loads items with PreloadJS.
   */
  loadManifest: function (items) {
    this.__numItemsLoading += items.length;
    
    // add each item to the loading list (the onLoadStart event given
    // by preloadJS does not give the src).
    for (i in items) {
      var item = items[i];
      var name = this.__srcToName(item);
      this.__loading[name] = item;
    }
    
    this.__preloadjs.loadManifest(items, true);
  },
  
  /*
   * Loads fonts using Google's WebFont Loader.
   */
  loadFonts: function (config) {
    config.fontactive = this.__webFontActive.bind(this);
    config.fontinactive = this.__webFontInactive.bind(this);
    config.fontloading = this.__webFontLoading.bind(this);
    this.__fontsLoading = true;
    WebFont.load(config);
  },
  
  /*
   * Receive notification from preloadJS that an asset has been loaded.
   * Adds it to the AssetDict.
   */
  __preloadjsOnFileLoad: function (event) {
    var img = event.result;
    var name = this.__srcToName(event.src);
    this.__assetDict[name] = img;
    --this.__numItemsLoading;
    delete this.__loading[name];
  },
  
  /*
   * If preloadJS fails to load an asset, add it to the list of failures.
   */
  __preloadjsOnError: function (event) {
    var name = this.__srcToName(event.src);
    this.__errors[name] = event.src;
    delete this.__loading[name];
    --this.__numItemsLoading;
  },
  
  /*
   * Adds loaded font to AssetDict.
   */
  __webFontActive: function (fontFamily, fontDescription) {
    this.__assetDict[fontFamily] = fontDescription;
    --this.__numFontsLoading;
    delete this.__loading[fontFamily];
  },
  
  /*
   * Adds failed-to-load font to list of errors.
   */
  __webFontInactive: function (fontFamily, fontDescription) {
    this.__errors[fontFamily] = fontDescription;
    --this.__numFontsLoading;
    delete this.__loading[fontFamily];
  },

  /*
   * Track that a web font is currently loading.
   */
  __webFontLoading: function (fontFamily, fontDescription) {
    ++this.__numFontsLoading;
    this.__loading[fontFamily] = fontDescription;
  },
  
  /*
   * Returns the basename of a source path.
   */
  __srcToName: function (src) {
    return src.replace(/^.*\/|\.[^.]*$/g, '');
  }
}