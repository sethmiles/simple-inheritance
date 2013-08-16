var Class = function(hash) {
    var klass = function() {
        this.initialize.apply(this, arguments);       
    };
    
    for (var property in hash) { 
       klass.prototype[property] = hash[property];
    }
          
    if (!klass.prototype.initialize) {
      klass.prototype.initialize = function(){
        console.log('Initializing Base Class');
      };
    }
    
    return klass;
};