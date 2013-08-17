Class = function () {  

  var klass = function () {
    return this.initialize.apply(this, arguments);
  }

  for(var i = arguments.length; i != 0; i--){
    klass = Class.extend(klass, arguments[i - 1]);
    klass.extend = extend;
  }

  if(!klass.initialize){
    klass.initialize = function () {
      console.log('creating base class');
    }
  }

  return klass;

}

var extend = Class.extend = function (klass, arg) {
  var hash = arg,
      buildProto = function (arg) {
        var mysuper = arg;
        mysuper.prototype = arg.prototype;
        mysuper.prototype.constructor = arg;
        return mysuper;
      }

  if(typeof(arg) == 'function'){
    klass.prototype.super = arg;
    klass.prototype.super = buildProto(arg);
    hash = arg.prototype;
  }

  for(prop in hash){
    if(prop != 'super'){
      klass.prototype[prop] = hash[prop];
    }
  }

  return klass;

}