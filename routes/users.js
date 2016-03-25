var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users.controller.js');

/* GET all users */
router.get('/', function(req, res) {
  return usersCtrl.getUsers(req, res);
});

/* POST to add a new user */
router.post('/', function(req, res) {
  return usersCtrl.create(req, res);
});

/* GET user by id */
router.get('/id/:id', function(req, res) {
  return usersCtrl.getUserById(req, res);
});

module.exports = router;
