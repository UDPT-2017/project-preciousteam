const homeController = {
	index: function(req, res){
		let user = req.user;
		console.log(user);
		res.render('home', {
			active_home: 'fixedactive',
			user: user
		});
	}
};

module.exports = homeController;
