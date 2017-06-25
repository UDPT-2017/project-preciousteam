const User = require('../models/users.js');

const logInController = {
	index: function(req, res){
		let bannerTit = "Login";
		let bannerPage = "Login";
		let user = req.user;
		res.render('logIn', {
			bannerTit: bannerTit,
			bannerPage: bannerPage,
			user: user
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
	},
	logOut: function(req, res){
        console.log(req.body);
        if (req.body.logout == 1)
        {
            req.logout();
            console.log('hoho', req.user);
            res.end('/logIn');
        }
	}
};

module.exports = logInController;