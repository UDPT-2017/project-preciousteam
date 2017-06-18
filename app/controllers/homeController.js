const homeController = {
	index: function(req, res){
		res.render('home', {
			active_home: 'fixedactive'
		});
	}
};

module.exports = homeController;
