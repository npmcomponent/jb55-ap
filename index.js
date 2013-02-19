
var type = require('type');

module.exports = function(fn){
  if (type(fn) !== 'function') return fn;
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  return fn.apply(this, args);
};

