const express = require('express')
const path = require('path')
const compression = require('compression')
const fs = require('fs')

const app = express()

app.use(compression())

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// app.get('/cv_download', function (req, res) {
//   const filePath = "/public/assets/Chris_Gullian.pdf"

//   fs.readFile(__dirname + filePath , function (err, data) {
//       res.contentType("application/pdf")
//       res.send(data)
//   })
// })

// app.use(function(req, res, next) {
// 	const err = new Error('Not Found')
// 	err.status = 404;
// 	next(err);
// })

// app.use(function(err, req, res, next) {
// 	err.status = err.status || 500
// 	console.log('error:', err)
// 	res.status(err.status).json({
// 		stack: err.stack,
// 		message: err.message
// 	})
// })

const port = process.env.PORT || 8081
app.listen(port, function() {
	console.log('Fun happens on port:', port)
})