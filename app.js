var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./node_modules'));
app.use(express.static(__dirname));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	err.status = err.status || 500;
	console.log('error:', err);
	res.status(err.status).json({
		stack: err.stack,
		message: err.message
	});
});

var port = 8081;
app.listen(port, function() {
	console.log('Fun happens on port:', port)
});