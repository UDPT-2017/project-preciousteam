const multer = require('multer')
const storage = require('../../config/upload')
const User = require('../models/users')

const registerController = {
	index: function(req, res){
		let bannerTit = "Register";
		let bannerPage = "Register";
		let user = req.user;
		res.render('register', {
			bannerTit: bannerTit,
			bannerPage: bannerPage,
			user: user
		});
	},
	submit: function(req, res){
		const upload = multer({ storage : storage}).single('userPhoto');
		upload(req,res,function(err) {
		console.log('hihi', req.body);
		if(err != null) {
			res.end('0');
		}
		else
		{
			let user = req.user;
			res.render('activateAnnounce', {user: user});
		}
		});
	}
};

module.exports = registerController;