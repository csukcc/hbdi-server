var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var suggestionsModel = new Schema({
	from: {
    type: String,
    required: true,
    validate: [
      function(From) {
        return From.length > 0;
      },
      'From which quadrant(s)?'
    ]
  },
  to: {
    type: String,
    required: true,
    validate: [
      function(to) {
        return to.length > 0;
      },
      'To which quadrant(s)?'
    ]
  },
  decription: {
    type: String,
    required: true,
    validate: [
      function(decription) {
        return decription.length > 0;
      },
      'Suggestion decription cannot be empty'
    ]
  },
});

module.exports = mongoose.model('Suggestions', suggestionsModel);
