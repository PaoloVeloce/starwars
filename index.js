// introduce node module express
var express = require('express');
// specify app as new express application
var app = express();

app.set('view engine', 'ejs');
// getting access to routes logic
var routes = require('./routes');

// saying to express that static files in assets
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// home 
app.get('/', routes.home);

// movie_single
app.get('/star_wars_episode:episode_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);

// listen on specific port
app.listen(3000, function(req, res) {
	console.log('This server runs on localhost:3000');
})