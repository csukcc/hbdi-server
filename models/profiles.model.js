var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileCode = new Schema({
	a: {
		type: Number,
		required: true,
    validate: [
      function(a) {
        return (a > 0 && a < 3);
      },
      'Profile Code for Quadrant A should be greater than 0 and less than 3'
    ]
	},
	b: {
		type: Number,
		required: true,
    validate: [
      function(b) {
        return (b > 0 && b < 3);
      },
      'Profile Code for Quadrant B should be greater than 0 and less than 3'
    ]
	},
	c: {
		type: Number,
		required: true,
    validate: [
      function(c) {
        return (c > 0 && c < 3);
      },
      'Profile Code for Quadrant C should be greater than 0 and less than 3'
    ]
	},
	d: {
		type: Number,
		required: true,
    validate: [
      function(d) {
        return (d > 0 && d < 3);
      },
      'Profile Code for Quadrant D should be greater than 0 and less than 3'
    ]
	}
});

var communication = new Schema({
  prefer: {
    title: {
      type: String,
      required: true,
      validate: [
        function(title) {
          return title.length > 0;
        },
        'Prefered Communication Title cannot be empty'
      ]
    },
    description: {
      type: String,
      required: true,
      validate: [
        function(description) {
          return description.length > 0;
        },
        'Prefered Communication Description cannot be empty'
      ]
    }
  },
  overlook: {
    title: {
      type: String,
      required: true,
      validate: [
        function(title) {
          return title.length > 0;
        },
        'Overlooked Communication Title cannot be empty'
      ]
    },
    description: {
      type: String,
      required: true,
      validate: [
        function(description) {
          return description.length > 0;
        },
        'Overlooked Communication Description cannot be empty'
      ]
    }
  }
});

var strategy = new Schema({
  prefer: {
    title: {
      type: String,
      required: true,
      validate: [
        function(title) {
          return title.length > 0;
        },
        'Prefered Communication Title cannot be empty'
      ]
    },
    description: {
      type: String,
      required: true,
      validate: [
        function(description) {
          return description.length > 0;
        },
        'Prefered Communication Description cannot be empty'
      ]
    }
  },
  overlook: {
    title: {
      type: String,
      required: true,
      validate: [
        function(title) {
          return title.length > 0;
        },
        'Overlooked Communication Title cannot be empty'
      ]
    },
    description: {
      type: String,
      required: true,
      validate: [
        function(description) {
          return description.length > 0;
        },
        'Overlooked Communication Description cannot be empty'
      ]
    }
  }
});

var decision = new Schema({
  prefer: {
    title: {
      type: String,
      required: true,
      validate: [
        function(title) {
          return title.length > 0;
        },
        'Prefered Communication Title cannot be empty'
      ]
    },
    description: {
      type: String,
      required: true,
      validate: [
        function(description) {
          return description.length > 0;
        },
        'Prefered Communication Description cannot be empty'
      ]
    }
  },
  overlook: {
    title: {
      type: String,
      required: true,
      validate: [
        function(title) {
          return title.length > 0;
        },
        'Overlooked Communication Title cannot be empty'
      ]
    },
    description: {
      type: String,
      required: true,
      validate: [
        function(description) {
          return description.length > 0;
        },
        'Overlooked Communication Description cannot be empty'
      ]
    }
  }
});

var HerrmannModel = new Schema({
	profileCode: [profileCode],
  databasePercentage: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  communication: [communication],
  strategy: [strategy],
  decision: [decision]
});

module.exports = mongoose.model('Herrmann', HerrmannModel);
