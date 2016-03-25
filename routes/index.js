var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/users.controller.js');

router.get('/', function (req, res) {
	res.send('Welcome to my API');
});

module.exports = router;
