var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var db;

if (process.env.ENV == 'TEST') {
	db = mongoose.connect('mongodb://localhost/hbdi-server-test');
} else {
	db = mongoose.connect('mongodb://localhost/hbdi-server');
}

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API request forwards
app.use('/api/', routes);
app.use('/api/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	res.status(404).send('Page Not Found');
  // var err = new Error('Not Found');
  // err.status = 404;
  // next(err);
});

app.get('/', function (req, res) {
	res.send('Welcome to my API');
});

app.listen(port, function () {
	console.log('Gulp is running on PORT: ' + port);
});

module.exports = app;
