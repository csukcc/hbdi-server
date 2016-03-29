var Suggestions = require('../models/suggestions.model.js');

exports.getSuggestions = function (req, res) {
	var query = {};

	Suggestions.find(query)
		.exec(function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(data);
			}
		});
};
