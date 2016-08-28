var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
})

app.use(function(err, req, res, next) {
	err.status = err.status || 500;
	console.log('error:', err);
	res.status(err.status).json({
		stack: err.stack,
		message: err.message
	});
});

var port = process.env.PORT || 8081;
app.listen(port, function() {
	console.log('Fun happens on port:', port)
});