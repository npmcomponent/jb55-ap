
module.exports = function(fn){
  if (typeof fn !== 'function') return fn;
  var args = arguments.length > 1? [].slice.call(arguments, 1) : [];
  return fn.apply(this, args);
};
