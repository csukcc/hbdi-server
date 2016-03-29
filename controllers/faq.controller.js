var Faq = require('../models/faq.model.js');

exports.getFAQ = function (req, res) {
	var query = {};

	console.log(Faq);

	Faq.find(query)
		.sort({
			'questionNum': 1
		})
		.exec(function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(data);
			}
		});
};
