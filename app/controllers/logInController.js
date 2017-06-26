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
            const user = req.user;
            if (user.type == 2)
				res.end('/home');
			if (user.type == 0)
				res.end('/homeAdmin');
			if (user.type == 1)
				res.end('/homeStaff');
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