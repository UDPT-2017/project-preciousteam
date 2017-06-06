const registerController = {
	index: function(req, res){
		let bannerTit = "Register";
		let bannerPage = "Register";
		res.render('register', {
			bannerTit: bannerTit,
			bannerPage: bannerPage
		});
	}
};

module.exports = registerController;