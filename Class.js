Class = function () {  

  var klass = function () {
    return this.initialize.apply(this, arguments);
  }

  for(var i = arguments.length; i != 0; i--){
    klass = Class.extend(klass, arguments[i - 1]);
  }

  if(!klass.initialize){
    klass.initialize = function () {}
  }

  return klass;

}

var extend = Class.extend = function (klass, arg) {
  var hash = arg,
      buildProto = function (arg) {
        var mysuper = arg;                    // Append constructor
        mysuper.prototype = arg.prototype;    // Append prototype
        mysuper.prototype.constructor = arg;  // Set constructor
        return mysuper;
      }

  if(typeof(arg) == 'function'){
    klass.prototype.super = buildProto(arg);
    hash = arg.prototype;
  }

  for(prop in hash){
    if(prop != 'super'){ // Don't want to overwrite the super methods
      klass.prototype[prop] = hash[prop];
    }
  }

  return klass;

}