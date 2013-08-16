
Person = function(){

	 var Person = Class({

		fname: '',
		lname: '',
		age: 0,
		gender: '',

		constructor: function () {
			
		},

		initialize: function () {
			console.log('Initializing Person...');
		},

		getFullName: function () {
			return this.fname + ' ' + this.lname;
		},

		isAnAdult: function () {
			return (age >= 18);
		},

		isMan: function () {
			return (gender.toLowerCase() == 'male');
		},

		setfName: function (name){
			this.fname = name;
		},

		getfName: function () {
			return this.fname;
		},

		setlname: function (name){
			this.lname = name;
		},

		getlname: function () {
			return this.lname;
		},

		setAge: function (age) {
			this.age = age;
		},

		getAge: function () {
			return this.age
		},

		setGender: function (gender){
			this.gender = gender;
		},

		getGender: function () {
			return gender;
		}

	});

	return Person;

}();