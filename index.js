// introduce node module express
var express = require('express');
// specify app as new express application
var app = express();

// Routes

// Home server get request from client
app.get('/', function(req, res) {
	res.send("This is server response on home page!");
});

// movie single
app.get('/stawarepi/:episode_number?', function(req, res) {
	var episode_number = req.params.episode_number;
	res.send("This is the page for episode " + episode_number);
})

// listen on specific port
app.listen(3000, function(req, res) {
	console.log('This server runs on localhost:3000');
})