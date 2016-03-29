var express = require('express');
var router = express.Router();
var suggestionsCtrl = require('../controllers/suggestions.controller.js');

/* GET all suggestions */
router.get('/', function(req, res) {
  return suggestionsCtrl.getSuggestions(req, res);
});

module.exports = router;
