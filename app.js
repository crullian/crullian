var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');

var app = express();

app.use(express.static('./node_modules'));
app.use(express.static(__dirname));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);
// swig.setDefaults({
// 	cache: false
// });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/signup', function(req, res) {
// 	res.render('signup');
// });

// app.get('/success', function(req, res) {
// 	res.render('success');
// });

// app.post('/signup', function(req, res, next) {
// 	User.create(req.body, function(err, user) {
// 		console.log('hitting server signup');
// 		console.log('the user is: ', user);
// 		if (err) return next(err);
// 		res.redirect('/success')
// 	})
// });


// app.get('/login', function(req, res) {
// 	res.render('login');
// });

// app.post('/login', function(req, res, next) {
// 	// console.log('body:', req.body);
// 	User.findOne({
// 		username: req.body.username,
// 		password: req.body.password
// 	}, function(err, user) {
// 		if (err) return next(err);
// 		if (user === null) {
// 			var err = new Error('Not authenticated');
// 			err.status = 401;
// 			next(err);
// 		} else {
// 			res.redirect('/success')
// 		}
// 	})
// });

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
	console.log('Express server listening intenly on port:', port)
});