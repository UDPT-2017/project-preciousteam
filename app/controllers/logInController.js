const logInController = {
	index: function(req, res){
		let bannerTit = "Login";
		let bannerPage = "Login";
		res.render('logIn', {
			bannerTit: bannerTit,
			bannerPage: bannerPage
		});
	}
};

module.exports = logInController;