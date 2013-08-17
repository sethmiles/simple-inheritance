
var CEO = function () {

	var CEO = Class({

		area: '',

		constructor: function () {

		},

		initialize: function () {
			console.log('Initializing CEO...');
		},

		setCEOArea: function (area) {
			this.area = area;
		}

	}, Band);

	return CEO;

}();