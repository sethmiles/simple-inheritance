Simple-Inheritance
==================

Simple methods for writing extensible JavaScript classes.

#How It Works

Class.js is 45 lines of code that takes in a hash of attributes and methods as well as the class that is being extended. Below is a sample of how to create a class using Class.js.


 ```javascript
 Reptile = function () {

	var Reptile = Class({

		initialize: function () {
			console.log('Creating a reptile');
		},

		setSkinColor: function (color) {
			this.skinColor = color;
		}

		getSkinColor: function () {
			return this.skinColor;
		}
	});

	return Reptile

}();
 ```

 This has now created the class Reptile to the window. Typing `Reptile` into the command line would return the constructor. `Reptile.prototype` shows all methods shown above.

###Extending a Class

```javascript
Gecko = function () {

 	var Gecko = Class({

 		initialize: function () {
 			console.log('Creating a Gecko');
 		}

 		setLength: function (length) {
 			this.length = length;
 		}

 		getLength: function () {
 			return this.length;
 		}

 	}, Reptile);

 	return Gecko;

}();
```

There are now Gecko and Reptile classes on the window. `myGecko = new Gecko()` will return a new Gecko. `myGecko.super` returns the constructor for the super class (Reptile) and `myGecko.super.prototype` are all the parent methods.

###Extending Multiple Classes

To extend more than one class, simple follow the pattern above and only pass in the class which is being extended. A chain is formed and the super methods are appended to each class as it's being created. Modifying any method on the prototype chain will alter it for all classes.

###Warning

JavaScript was not created to have deep inheritance like classical languages. This simple code imitates that type of inheritance. Checking class inheritance by using `instanceof` is not reliable.
