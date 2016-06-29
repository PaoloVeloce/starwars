
var moviesJSON = require('../movies.json')

// Home server get request from client
exports.home = function(req, res) {
	
	var movies = moviesJSON.movies;
	
	/* another tricky way to do that. It cleans some in home.ejs but creates more there
	var moviePosters = [];
	for (var i = 0; i < movies.length; i++) {
		moviePosters = moviePosters.concat(movies[i].posters);
	}
	*/
	res.render('home', {
		// that could be seen in home.js if we enruby <%= title %> here
		title: "Star Wars Movies",
		movies: movies
		// movies: ["The First Movie", "The Second Movie", "The Third Movie"]
		
	});
};

// movie_single
exports.movie_single = function(req, res) {
	
	var episode_number = req.params.episode_number;
	
	var movies = moviesJSON.movies;
	
	// show only episodes from 1 to 7
	if (episode_number >= 1 && episode_number <= 7) {
		
	  // because movie array is zero based
	  var movie = movies[episode_number - 1];
	
	  var title = movie.title;
	  
	  var main_characters = movie.main_characters;
		
	  res.render('movie_single', {
	    	movies: movies,
	    	title: title,
			movie: movie, 
			main_characters: main_characters
	  });
	} else {
		res.render('notFound', {
			movies: movies,
			title: "This is not a page you are looking for"
		});
	}
};

// notFound
exports.notFound = function(req, res) {
	var movies = moviesJSON.movies;
	
	res.render('notFound', {
		movies: movies, 
		title: "This is not the page you are looking for"
	});
};