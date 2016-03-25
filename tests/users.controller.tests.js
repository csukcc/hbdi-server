var should = require('should');
var request = require('supertest');
var app = require(__dirname + '/../server.js');

describe('Users Controller Tests:', function () {
	describe('Post', function () {
		var userModel = require('../models/users.model.js');
		var usersController = require('../controllers/users.controller.js');

		beforeEach(function () {
			user = {
				firstname: 'Hao',
				lastname: 'Dong',
				username: 'hdong',
				companyRole: {
					level: 2,
					type: 'Associate',
					squad: 'Canyon'
				},
				profileCode: {
					a: 1,
					b: 1,
					c: 2,
					d: 2
				},
				adjectivePairs: {
					a: 11,
					b: 6,
					c: 4,
					d: 3
				},
				profileScores: {
					a: 102,
					b: 96,
					c: 42,
					d: 57
				},
				role: 'Admin',
				active: true
			};
		});

		afterEach(function (done) {
			userModel.remove({}, function () {
				done();
			});
		});

		it('should POST a user and get back a response', function (done) {
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);

					res.statusCode.should.equal(201);

					should.exist(data._id);

					should.exist(data.firstname);
					data.firstname.should.equal(user.firstname);

					should.exist(data.lastname);
					data.lastname.should.equal(user.lastname);

					should.exist(data.username);
					user.username.should.equal(user.username);

					should.exist(data.companyRole);
					user.companyRole.should.equal(user.companyRole);

					should.exist(data.profileCode);
					user.profileCode.should.equal(user.profileCode);

					should.exist(data.adjectivePairs);
					user.adjectivePairs.should.equal(user.adjectivePairs);

					should.exist(data.profileScores);
					user.profileScores.should.equal(user.profileScores);

					should.exist(data.role);
					user.role.should.equal(user.role);

					should.exist(data.active);
					user.active.should.equal(user.active);

					done();
				});
		});

		it('should return an error when First Name is undefined', function (done) {
			user.firstname = undefined;
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors.firstname.message.should.equal('First Name is missing');
					done();
				});
		});

		it('should return an error when First Name is NOT between 2 and 16 characters', function (done) {
			user.firstname = 'A';
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors.firstname.message.should.equal('First Name must be greater than 2 characters and less than 16 characters');
					done();
				});
		});

		it('should return an error when Last Name is undefined', function (done) {
			user.lastname = undefined;
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors.lastname.message.should.equal('Last Name is missing');
					done();
				});
		});

		it('should return an error when Last Name is NOT between 2 and 16 characters', function (done) {
			user.lastname = 'A';
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors.lastname.message.should.equal('Last Name must be greater than 2 characters and less than 16 characters');
					done();
				});
		});

		it('should return Username as a string', function (done) {
			user.username = 102;
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(201);
					data.username.should.be.a.String();
					done();
				});
		});

		it('should return an error if Company Role type is missing', function (done) {
			user.companyRole = {
				level: 2,
				squad: 'Canyon'
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['companyRole.type'].message.should.equal('Company Role Type is missing');
					done();
				});
		});

		it('should return an error if Company Role type is wrong', function (done) {
			user.companyRole = {
				level: 2,
				type: 'test',
				squad: 'Canyon'
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['companyRole.type'].should.be.ok();
					done();
				});
		});

		it('should return an error if Company Role squad is missing', function (done) {
			user.companyRole = {
				level: 2,
				type: 'Associate Developer'
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['companyRole.squad'].message.should.equal('Company Squad is missing');
					done();
				});
		});

		//profileCode
		it('should return an error if Profile Code A is missing', function (done) {
			user.profileCode = {
				b: 1,
				c: 2,
				d: 2
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileCode.a'].message.should.be.equal('Profile Code Quadrant A is missing');
					done();
				});
		});

		it('should return an error if Profile Code B is missing', function (done) {
			user.profileCode = {
				a: 1,
				c: 2,
				d: 2
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileCode.b'].message.should.be.equal('Profile Code Quadrant B is missing');
					done();
				});
		});

		it('should return an error if Profile Code C is missing', function (done) {
			user.profileCode = {
				a: 1,
				b: 1,
				d: 2
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileCode.c'].message.should.be.equal('Profile Code Quadrant C is missing');
					done();
				});
		});

		it('should return an error if Profile Code D is missing', function (done) {
			user.profileCode = {
				a: 1,
				b: 1,
				c: 2
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileCode.d'].message.should.be.equal('Profile Code Quadrant D is missing');
					done();
				});
		});

		it('should return an error if Profile Code A is equal or less than 0', function (done) {
			user.profileCode = {
				a: 0,
				b: 1,
				c: 2,
				d: 2
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileCode.a'].message.should.be.equal('Profile Code Quadrant A should be greater than 0 and less than 3');
					done();
				});
		});

		it('should return an error if Profile Code B is equal or less than 0', function (done) {
			user.profileCode = {
				a: 1,
				b: 0,
				c: 2,
				d: 2
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileCode.b'].message.should.be.equal('Profile Code Quadrant B should be greater than 0 and less than 3');
					done();
				});
		});

		it('should return an error if Profile Code C is equal or less than 0', function (done) {
			user.profileCode = {
				a: 1,
				b: 1,
				c: 0,
				d: 2
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileCode.c'].message.should.be.equal('Profile Code Quadrant C should be greater than 0 and less than 3');
					done();
				});
		});

		it('should return an error if Profile Code D is equal or less than 0', function (done) {
			user.profileCode = {
				a: 1,
				b: 1,
				c: 2,
				d: 0
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileCode.d'].message.should.be.equal('Profile Code Quadrant D should be greater than 0 and less than 3');
					done();
				});
		});

		//adjectivePairs
		it('should return an error if Adjective Pairs A is missing', function (done) {
			user.adjectivePairs = {
				b: 6,
				c: 4,
				d: 3
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['adjectivePairs.a'].message.should.be.equal('Adjective Pairs Quadrant A is missing');
					done();
				});
		});

		it('should return an error if Adjective Pairs B is missing', function (done) {
			user.adjectivePairs = {
				a: 11,
				c: 4,
				d: 3
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['adjectivePairs.b'].message.should.be.equal('Adjective Pairs Quadrant B is missing');
					done();
				});
		});

		it('should return an error if Adjective Pairs C is missing', function (done) {
			user.adjectivePairs = {
				a: 11,
				b: 6,
				d: 3
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['adjectivePairs.c'].message.should.be.equal('Adjective Pairs Quadrant C is missing');
					done();
				});
		});

		it('should return an error if Adjective Pairs D is missing', function (done) {
			user.adjectivePairs = {
				a: 11,
				b: 6,
				c: 4
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['adjectivePairs.d'].message.should.be.equal('Adjective Pairs Quadrant D is missing');
					done();
				});
		});

		it('should return an error if Adjective Pairs A is missing', function (done) {
			user.adjectivePairs = {
				a: 0,
				b: 6,
				c: 4,
				d: 3
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['adjectivePairs.a'].message.should.be.equal('Adjective Pairs Quadrant A should be greater than 0');
					done();
				});
		});

		it('should return an error if Adjective Pairs B is missing', function (done) {
			user.adjectivePairs = {
				a: 11,
				b: 0,
				c: 4,
				d: 3
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['adjectivePairs.b'].message.should.be.equal('Adjective Pairs Quadrant B should be greater than 0');
					done();
				});
		});

		it('should return an error if Adjective Pairs C is missing', function (done) {
			user.adjectivePairs = {
				a: 11,
				b: 6,
				c: 0,
				d: 3
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['adjectivePairs.c'].message.should.be.equal('Adjective Pairs Quadrant C should be greater than 0');
					done();
				});
		});

		it('should return an error if Adjective Pairs D is missing', function (done) {
			user.adjectivePairs = {
				a: 11,
				b: 6,
				c: 4,
				d: 0
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['adjectivePairs.d'].message.should.be.equal('Adjective Pairs Quadrant D should be greater than 0');
					done();
				});
		});

		//profileScores
		it('should return an error if Profile Scores A is missing', function (done) {
			user.profileScores = {
				b: 96,
				c: 42,
				d: 57
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileScores.a'].message.should.be.equal('Profile Scores Quadrant A is missing');
					done();
				});
		});

		it('should return an error if Profile Scores B is missing', function (done) {
			user.profileScores = {
				a: 102,
				c: 42,
				d: 57
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileScores.b'].message.should.be.equal('Profile Scores Quadrant B is missing');
					done();
				});
		});

		it('should return an error if Profile Scores C is missing', function (done) {
			user.profileScores = {
				a: 102,
				b: 96,
				d: 57
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileScores.c'].message.should.be.equal('Profile Scores Quadrant C is missing');
					done();
				});
		});

		it('should return an error if Profile Scores D is missing', function (done) {
			user.profileScores = {
				a: 102,
				b: 96,
				c: 42
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileScores.d'].message.should.be.equal('Profile Scores Quadrant D is missing');
					done();
				});
		});

		it('should return an error if Profile Scores A is missing', function (done) {
			user.profileScores = {
				a: 0,
				b: 96,
				c: 42,
				d: 57
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileScores.a'].message.should.be.equal('Profile Scores Quadrant A should be greater than 0');
					done();
				});
		});

		it('should return an error if Profile Scores B is missing', function (done) {
			user.profileScores = {
				a: 102,
				b: 0,
				c: 42,
				d: 57
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileScores.b'].message.should.be.equal('Profile Scores Quadrant B should be greater than 0');
					done();
				});
		});

		it('should return an error if Profile Scores C is missing', function (done) {
			user.profileScores = {
				a: 102,
				b: 96,
				c: 0,
				d: 57
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileScores.c'].message.should.be.equal('Profile Scores Quadrant C should be greater than 0');
					done();
				});
		});

		it('should return an error if Profile Scores D is missing', function (done) {
			user.profileScores = {
				a: 102,
				b: 96,
				c: 42,
				d: 0
			};
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors['profileScores.d'].message.should.be.equal('Profile Scores Quadrant D should be greater than 0');
					done();
				});
		});

		// Role
		it('should return an error if User Role is not valid', function (done) {
			user.role = 'Test';
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(500);
					data.errors.role.should.be.ok();
					done();
				});
		});

		it('should add user even if User Role is missing', function (done) {
			user.role = undefined;
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(201);
					data.role.should.be.equal('User');
					done();
				});
		});

		it('should add user even if User Active is missing', function (done) {
			user.active = undefined;
			request(app)
				.post('/api/users')
				.send(user)
				.end(function (err, res) {
					var data = JSON.parse(res.text);
					res.statusCode.should.equal(201);
					data.active.should.be.equal(true);
					done();
				});
		});
	});

	// describe('Get User by ID', function () {
	//
	// });
	//
	// describe('Get Users', function () {
	//
	// });

});
