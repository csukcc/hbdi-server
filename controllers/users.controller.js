var Users = require('../models/users.model.js');

exports.create = function(req, res) {
	var user = new Users(req.body);
	user.save(function(err) {
		if (err) {
			res.status(500);
			res.send(err);
		} else {
			res.status(201);
			res.send(user);
		}
	});
};

exports.getUserById = function (req, res) {
	Users.findById(req.params.id, function (err, user) {
		if(err) {
			res.status(500).send(err);
		} else {
			res.json(user);
		}
	});
};

exports.getUsers = function (req, res) {
	var query = {};
	var limit = req.query.limit || 20;
	var skip = req.query.skip || 0;

	Users.find(query)
		.where('active').equals(true)
		.limit(limit)
		.skip(skip)
		.sort({
			'firstname': 1,
			'lastname': 1
		})
		.exec(function(err, users) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(users);
			}
		});
};
