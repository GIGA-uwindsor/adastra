/*
 * Module that pertains to operations that effect the runtime.
 * Currently offers deferred initialization and gc of object
 * pools.
 */
var Runtime = (function (m) {

var initializers = [];
var gcs = [];

m.Init = function (i) {
  initializers.push(i);
}

m.GC = function (gc) {
  gcs.push(gc);
}

m.DoInit = function () {
  for (var i = 0; i < initializers.length; ++i) {
    initializers[i]();
  }
  initializers = null;
}

m.DoGC = function () {
  for (var i = 0; i < gcs.length; ++i) {
    gcs[i]();
  }
}

return m;
})({});
