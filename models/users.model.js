var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileCode = {
	a: {
		type: Number,
		required: [true, 'Profile Code Quadrant A is missing'],
    validate: [
      function(a) {
        return (a > 0 && a < 3);
      },
      'Profile Code Quadrant A should be greater than 0 and less than 3'
    ]
	},
	b: {
		type: Number,
		required: [true, 'Profile Code Quadrant B is missing'],
    validate: [
      function(b) {
        return (b > 0 && b < 3);
      },
      'Profile Code Quadrant B should be greater than 0 and less than 3'
    ]
	},
	c: {
		type: Number,
		required: [true, 'Profile Code Quadrant C is missing'],
    validate: [
      function(c) {
        return (c > 0 && c < 3);
      },
      'Profile Code Quadrant C should be greater than 0 and less than 3'
    ]
	},
	d: {
		type: Number,
		required: [true, 'Profile Code Quadrant D is missing'],
    validate: [
      function(d) {
        return (d > 0 && d < 3);
      },
      'Profile Code Quadrant D should be greater than 0 and less than 3'
    ]
	}
};

var adjectivePairs = {
  a: {
		type: Number,
		required: [true, 'Adjective Pairs Quadrant A is missing'],
    validate: [
      function(a) {
        return a > 0;
      },
      'Adjective Pairs Quadrant A should be greater than 0'
    ]
	},
	b: {
		type: Number,
		required: [true, 'Adjective Pairs Quadrant B is missing'],
    validate: [
      function(b) {
        return b > 0;
      },
      'Adjective Pairs Quadrant B should be greater than 0'
    ]
	},
	c: {
		type: Number,
		required: [true, 'Adjective Pairs Quadrant C is missing'],
    validate: [
      function(c) {
        return c > 0;
      },
      'Adjective Pairs Quadrant C should be greater than 0'
    ]
	},
	d: {
		type: Number,
		required: [true, 'Adjective Pairs Quadrant D is missing'],
    validate: [
      function(d) {
        return d > 0;
      },
      'Adjective Pairs Quadrant D should be greater than 0'
    ]
	}
};

var profileScores = {
  a: {
		type: Number,
		required: [true, 'Profile Scores Quadrant A is missing'],
    validate: [
      function(a) {
        return a > 0;
      },
      'Profile Scores Quadrant A should be greater than 0'
    ]
	},
	b: {
		type: Number,
		required: [true, 'Profile Scores Quadrant B is missing'],
    validate: [
      function(b) {
        return b > 0;
      },
      'Profile Scores Quadrant B should be greater than 0'
    ]
	},
	c: {
		type: Number,
		required: [true, 'Profile Scores Quadrant C is missing'],
    validate: [
      function(c) {
        return c > 0;
      },
      'Profile Scores Quadrant C should be greater than 0'
    ]
	},
	d: {
		type: Number,
		required: [true, 'Profile Scores Quadrant D is missing'],
    validate: [
      function(d) {
        return d > 0;
      },
      'Profile Scores Quadrant D should be greater than 0'
    ]
	}
};

var usersModel = new Schema({
	firstname: {
		type: String,
		required: [true, 'First Name is missing'],
    validate: {
      validator: function(firstname) {
        return (firstname.length > 2 && firstname.length < 16);
      },
      message: 'First Name must be greater than 2 characters and less than 16 characters'
    }
	},
	lastname: {
		type: String,
		required: [true, 'Last Name is missing'],
    validate: [
      function(lastname) {
        return (lastname.length > 2 && lastname.length < 16);
      },
      'Last Name must be greater than 2 characters and less than 16 characters'
    ]
	},
	username: String,
	companyRole: {
		level: {
			type: Number
		},
		type: {
			type: String,
			required: [true, 'Company Role Type is missing'],
			enum: ['Associate', 'Associate Analyst', 'Associate Developer', 'Analyst', 'Developer', 'Group Ops']
		},
	  squad: {
	    type: String,
	    required: [true, 'Company Squad is missing']
	  }
	},
	profileCode: profileCode,
	adjectivePairs: adjectivePairs,
	profileScores: profileScores,
	role: {
		type: String,
		required: [true, 'User Role is missing'],
		enum: ['Admin', 'User'],
		default: 'User'
	},
	active: {
		type: Boolean,
		required: [true, 'User Active is missing'],
		default: true
	}
});

module.exports = mongoose.model('Users', usersModel);
