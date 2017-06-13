const User = require('../models/users.js');

const logInController = {
	index: function(req, res){
		let bannerTit = "Login";
		let bannerPage = "Login";
		res.render('logIn', {
			bannerTit: bannerTit,
			bannerPage: bannerPage
		});
	},
	submit: function(req, res){
        console.log(req.body);
		if (req.user != null)
        {
            req.app.locals.user = req.user;
			res.end('/home');
        }
		else
			res.end('fail');
	}
};

module.exports = logInController;