// Home server get request from client
exports.home = function(req, res) {
	res.render('home', {
		// that could be seen in home.js if we enruby <%= title %> here
		title: "Star Wars Movies"
		// movies: ["The First Movie", "The Second Movie", "The Third Movie"]
	});
};

// movie single
exports.movie_single = function(req, res) {
	var episode_number = req.params.episode_number;
	res.send("This is the page for episode " + episode_number);
};

// notFound
exports.notFound = function(req, res) {
	res.send("This is not the page you are looking for");
};