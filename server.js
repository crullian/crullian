const express = require('express')
const path = require('path')
const compression = require('compression')
const fs = require('fs')

const app = express()

app.use(compression())

app.use(express.static(__dirname + '/public'))

app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 8081
app.listen(port, function() {
	console.log('Fun happens on port:', port)
})