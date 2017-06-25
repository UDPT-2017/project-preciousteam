const Cart = require('../models/cart')
const Product = require('../models/product')


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
	}
};

module.exports = userController;