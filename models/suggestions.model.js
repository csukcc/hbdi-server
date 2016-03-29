var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var suggestionsModel = new Schema({
	from: {
    type: String,
    required: [true, 'Suggestion FROM Quadrant(s) is missing'],
    validate: [
      function(From) {
        return From.length > 0;
      },
      'From which quadrant(s)?'
    ]
  },
  to: {
    type: String,
    required: [true, 'Suggestion TO Quadrant(s) is missing'],
    validate: [
      function(to) {
        return to.length > 0;
      },
      'To which quadrant(s)?'
    ]
  },
  decription: {
    type: String,
    required: [true, 'Suggestion Description is missing'],
    validate: [
      function(decription) {
        return decription.length > 0;
      },
      'Suggestion decription cannot be empty'
    ]
  },
});

module.exports = mongoose.model('Suggestions', suggestionsModel);
