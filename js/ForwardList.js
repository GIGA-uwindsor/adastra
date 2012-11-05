/*
 * Single Linked list
 */
function ForwardNode(value, next) {
  this.construct(value, next);
}
ForwardNode.prototype = {
  construct: function (value, next) {
    this.__value = value;
    this.__next = next;
  },
  
  destruct: function () {
    this.__value = null;
    this.__next = null;
  },
  
  setValue: function (value) { this.__value = value; },
  getValue: function () { return this.__value; },
  
  setNext: function (value) { this.__next = value; },
  getNext: function () { return this.__next; }
}