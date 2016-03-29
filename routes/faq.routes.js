var express = require('express');
var router = express.Router();
var faqCtrl = require('../controllers/faq.controller.js');

/* GET all FAQ */
router.get('/', function(req, res) {
  return faqCtrl.getFAQ(req, res);
});

module.exports = router;
