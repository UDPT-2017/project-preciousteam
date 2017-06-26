const multer = require('multer')
const storage = require('../../config/upload')
const User = require('../models/users')
const transporter = require('../../config/mails')

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
		console.log(req.file.filename);
		if(err != null) {
			res.end('0');
		}
		else
		{
			const email = req.body.email;
			User.checkUser(email, function(err, info){
				console.log(info);
				if (info.length == 0)
				{
					User.addUser(req.body.pass, req.body.email, req.body.name, req.body.tel, req.file.filename, 2, -2, function(err, ress){
						if (err !== null)
						{
							res.end('0');
						}
						else
						{
							let userID;
							User.checkUser(email, function(e, i){
								if (e != null)
								{
									res.end('0');
								} else
								{
									console.log(i);
									userID = i[0].userid;
									const link = 'https://project-preciousteam.herokuapp.com/activate/' + userID;
									const mailOption = {
										from: 'ThiNguyen <nghoangthi1@gmail.com>',
										to: email,
										subject: 'Confirm registration',
										html: '<h1>Thank you for registering with us.<h1><p> Please click the link below to be our official member </p><a href = "' + link + '"' + '>activate account</a>',
									}
									transporter.sendMail(mailOption, function(error, result){
										if (error)
										{
											console.log(error);
											res.end('0');
										}
										else
										{
											console.log('sent');
											res.end('1');
										}
									});
								}
							})

							
						}
					});
				}
				else
				{
					const fs = require('fs');
					const filePath = './public/images/' + req.file.filename; 
					fs.unlinkSync(filePath);
					res.end('-1');
				}
			});

		}
		});
	},
	activateAnnounce: function(req, res){
		let user = req.user;
		res.render('activateAnnounce', {
			user: user,
			aTitle: 'You now have your own account',
			aContent: 'Please activate your account before using it. We have sent a mail to your email address.'});
	},
	activate: function(req, res){
		let user = req.user;
			res.render('404', {
			user: user,
			Title: 'Activating...',
			Content: 'Please click the button below to activate your account',
			buttonLink: '/activate/process/' + req.params.userid,
			buttonValue: 'Activate'
			});
	},
	activateSuccess: function(req, res){
		let user = req.user;
		User.activate(req.params.userid, function(err, ress){
			if (err != null)
			{
				console.log(err);
			}
			else
			{
				res.render('activateAnnounce', {
				user: user,
				aTitle: 'Your account is succesfully activated',
				aContent: 'You can use it now'});
			}
		})
		
	}
};

module.exports = registerController;