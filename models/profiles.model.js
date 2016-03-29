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

var communication = {
  prefer: {
    title: {
      type: String,
      required: [true, 'Prefered Communication Title is missing']
    },
    description: {
      type: String,
      required: [true, 'Prefered Communication Description is missing']
    }
  },
  overlook: {
    title: {
      type: String,
      required: [true, 'Overlooked Communication Title is missing']
    },
    description: {
      type: String,
      required: [true, 'Overlooked Communication Description is missing']
    }
  }
};

var strategy = {
	prefer: {
    title: {
      type: String,
      required: [true, 'Prefered Strategy Title is missing']
    },
    description: {
      type: String,
      required: [true, 'Prefered Strategy Description is missing']
    }
  },
  overlook: {
    title: {
      type: String,
      required: [true, 'Overlooked Strategy Title is missing']
    },
    description: {
      type: String,
      required: [true, 'Overlooked Strategy Description is missing']
    }
  }
};

var decision = {
	prefer: {
    title: {
      type: String,
      required: [true, 'Prefered Decision Title is missing']
    },
    description: {
      type: String,
      required: [true, 'Prefered Decision Description is missing']
    }
  },
  overlook: {
    title: {
      type: String,
      required: [true, 'Overlooked Decision Title is missing']
    },
    description: {
      type: String,
      required: [true, 'Overlooked Decision Description is missing']
    }
  }
};

var HerrmannModel = new Schema({
	profileCode: [profileCode],
  databasePercentage: {
    type: String,
    required: [true, 'Database Percentage is missing']
  },
  description: {
    type: String,
    required: [true, 'Description is missing']
  },
  communication: [communication],
  strategy: [strategy],
  decision: [decision]
});

module.exports = mongoose.model('Herrmann', HerrmannModel);
