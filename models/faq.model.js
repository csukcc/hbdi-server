var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var faqModel = new Schema({
	questionNum: {
    type: Number,
    required: true,
		validate: [
      function(questionNum) {
        return questionNum > 0;
      },
      'Question Number must be greater than 0'
    ]
  },
  title: {
    type: String,
    required: true,
		validate: [
      function(title) {
        return title.length > 1;
      },
      'Title should be more than 1 character'
    ]
  },
  description: {
    type: String,
    required: true,
		validate: [
      function(description) {
        return description.length > 1;
      },
      'Title should be more than 1 character'
    ]
  }
});

module.exports = mongoose.model('FAQ', faqModel);
