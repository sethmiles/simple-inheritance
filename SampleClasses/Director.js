
Director = Class({

	title: '',

	officeNumber: '',

	constructor: function () {
		console.log('Construction');
	},
	
	initialize: function () {
		console.log('Initializing Director...');
	},

	getTitle: function () {
		return this.title;
	},

	setTitle: function (title) {
		this.title = title;
	},

	getOfficeNumber: function () {
		return this.officeNumber;
	},

	setOfficeNumber: function (officeNumber) {
		this.officeNumber = officeNumber;
	}

}, Person);