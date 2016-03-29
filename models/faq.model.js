var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var faqModel = new Schema({
	questionNum: {
    type: Number,
    required: [true, 'Question Number is missing'],
		validate: [
      function(questionNum) {
        return questionNum > 0;
      },
      'Question Number must be greater than 0'
    ]
  },
  title: {
    type: String,
    required: [true, 'Title is missing']
  },
  description: {
    type: String,
    required: [true, 'Description is missing']
  }
}, { collection: 'faq' });

module.exports = mongoose.model('FAQ', faqModel);
