/*
 * Node pool. Pools the single linked list nodes used
 * by all other pools.
 */
function NodePool() {
  this.__pool = null;
}
NodePool.prototype = {
  fish: function (value, next) {
    if (this.__pool == null) {
      return new ForwardNode(value, next);
    }
    else {
      var free = this.__pool;
      this.__pool = free.getNext();
      free.construct(value, next);
      return free;
    }
  },
  
  release: function (node) {
    node.destruct();
    node.setNext(this.__pool);
    this.__pool = node;
  },
  
  empty: function () {
    this.__pool = null;
  }
}

/*
 * This instance can be used globally for pools.
 */
var OfficialNodePool = new NodePool();

/*
 * Object pool. Enables objects to be recycled to avoid
 * garbage collections.
 */
function Pool(type, nodePool) {
  this.__pool = null;
  this.__nodePool = nodePool;
  this.__type = type;
  this.__type.prototype = type.prototype;
}
Pool.prototype = {
  fish: function () {
    if (this.__pool == null) {
      return new this.__type();
    }
    else {
      var free = this.__pool;
      var value = free.getValue();
      this.__pool = free.getNext();
      this.__nodePool.release(free);
      return value;
    }
  },
  release: function (value) {
    var node = this.__nodePool.fish(value, this.__pool);
    this.__pool = node;
  },
  empty: function () {
    this.__pool = null;
  }
}