// introduce node module express
var express = require('express');
// specify app as new express application
var app = express();

app.set('view engine', 'ejs');

// Routes

// Home server get request from client
app.get('/', function(req, res) {
	res.render('home', {
		// that could be seen in home.js if we enruby <%= title %> here
		title: "Star Wars Movies",
		movies: ["The First Movie", "The Second Movie", "The Third Movie"]
	});
});

// movie single
app.get('/stawarepi/:episode_number?', function(req, res) {
	var episode_number = req.params.episode_number;
	res.send("This is the page for episode " + episode_number);
});

// notFound
app.get('*', function(req, res) {
	res.send("This is not the page you are looking for");
})

// listen on specific port
app.listen(3000, function(req, res) {
	console.log('This server runs on localhost:3000');
})