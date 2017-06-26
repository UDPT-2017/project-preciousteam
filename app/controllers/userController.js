const Cart = require('../models/cart')
const Product = require('../models/product')
const multer = require('multer')
const storage = require('../../config/upload')
const User = require('../models/users')
const Inbox = require('../models/inbox.js');
const Post = require('../models/posts.js');

const userController  = {
	index: function(req, res){
		const user = req.user;
		if (user == undefined)
		{
			res.redirect('/logIn');
		}
		else {
		res.render('profile',{
			user: req.user
		});	
		}
		
	},
	profile: function(req, res){
		const user = req.user;
		if (user == undefined)
		{
			res.redirect('/logIn');
		}
		else
		{
		res.render('profile', {
			user: req.user
		});			
		}

	},
	cart: function(req, res){
		const user = req.user;
		if (user == undefined)
		{
			res.redirect('/logIn');
		}
		else {
			Cart.getAllItems(user.userid, function(err, ress){
			if (err != null)
			{
				console.log(err);
			}
			else
			{
				res.render('user-cart', {
					active_cart: "active",
					user: user,
					products: ress
				});
			}
			})			
		}
		
		
	},
	posts: function(req, res){
		const user = req.user;
		if (user == undefined)
		{
			res.redirect('/logIn');
		}
		else {
			Product.getAllPostsOf(user.userid, function(err, ress){
			if (err != null)
			{
				console.log(err);
				res.end('0');
			}
			else
			{
				res.render('posts', {
					active_post: "active",
					user: user,
					products: ress
				});
			}
		})
		}
		
		
	},
	createpost: function(req, res){
		if (req.user == undefined)
			res.redirect('/logIn');
		else
		{
			res.render('createpost', {
			user: req.user
		});
		}

	},
	updateUser: function(req, res){
		if (req.user == undefined)
		{
			res.redirect('/logIn');
			return;
		}
		const upload = multer({ storage : storage}).single('userPhoto');
		upload(req,res,function(err) {
			if (err){
				console.log(err);
			}
			else
			{
				console.log(req.body);
			if (req.body.changePic == 1){
				User.update(req.body.tel, req.body.pass, req.file.filename, req.user.userid, function(err1, ress){
					if (err1 != null)
					{
						console.log(err1);
						res.end('0');
					}
					else
					{
						res.end('1');
					}
				})				
			}
			else
			{
				User.update(req.body.tel, req.body.pass, null, req.user.userid, function(err1, ress){
					if (err1 != null)
					{
						console.log(err1);
						res.end('0');
					}
					else
					{
						res.end('1');
					}
				})
			}
			}
		});
	},
	addDiscount: function(req, res){
		if (req.user == undefined)
		{
			res.redirect('/logIn');
		}
		else
		{
		Post.getPostUser(req.user.userid, function(err, product){
			res.render('addDiscount',{
				active_discount: 'active',
				product: product,
				user: req.user
			});
		});			
		}
		
	},

	addDiscountSave: function(req, res){
		if (req.user == undefined)
		{
			res.redirect('/logIn');
		}
		else
		{
			Post.addDiscount(req.body.productID, req.body.percent, req.body.first, req.body.last, function(err, result){
			if(err!=null){
				res.end('0');
			}
			else {
				res.end('1');
			}
			})
		}
		
	},

	about: function(req, res){
		res.render('about',{
			active_about: 'fixedactive',

		});
	},
	contact: function(req, res){
		res.render('contact',{
			active_contact: 'fixedactive',

		});
	},
	sendMessage: function(req, res){
		Inbox.sendMessage(req.body.email, req.body.subject, req.body.message, function(err, result){
			if(err != null)
					res.end('0');
			else
					res.end('1');
		});
	},

	err: function(req, res){
		if(req.params.id==1){
			res.render('404',{
				eTitle: '404',
				Content: 'Page not found',
				buttonLink:'/home',
				buttonValue:'Back to home'
			});
		}
		if(req.params.id==2){
			res.render('404',{
				eTitle: '500',
				Content: 'Internal Server Error',
				buttonLink:'/home',
				buttonValue:'Back to home'
			});
		}
	}
};

module.exports = userController;
