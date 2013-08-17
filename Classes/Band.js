
var Band = function () {

	var Band = Class({

		bandLevel: '',

		constructor: function () {
			console.log('Construction');
		},
		
		initialize: function () {
			console.log('Initializing Band...');
		},

		getBand: function () {
			return this.bandLevel;
		},

		setBand: function (title) {
			this.bandLevel = title;
		},

	}, Director);

	return Band;

}();