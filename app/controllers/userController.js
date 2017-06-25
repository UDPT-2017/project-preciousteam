const Cart = require('../models/cart')
const Product = require('../models/product')
const multer = require('multer')
const storage = require('../../config/upload')
const User = require('../models/users')


const userController  = {
	index: function(req, res){
		res.render('profile',{
			user: req.user
		});
	},
	profile: function(req, res){
		res.render('profile', {
			user: req.user
		});
	},
	cart: function(req, res){
		const user = req.user;
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
		
	},
	posts: function(req, res){
		const user = req.user;
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
		
	},
	createpost: function(req, res){
		res.render('createpost', {
			user: req.user
		});
	},
	updateUser: function(req, res){
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
			
		})
		
	}
};

module.exports = userController;