const Inbox = require('../models/inbox.js');
const Post = require('../models/posts.js');

const userController  = {
	index: function(req, res){
		res.render('profile');
	},
	profile: function(req, res){
		res.render('profile', {
			name: 'Nguyễn Hoàng Thi',
			email: 'thikhin96@yahoo.com',
			password: 'hoho',
			phone: '092421441',
			active_profile: 'active'
		});
	},
	cart: function(req, res){
		res.render('user-cart', {
			active_cart: "active"
		});
	},
	posts: function(req, res){
		res.render('posts', {
			active_post: "active"
		});
	},
	createpost: function(req, res){
		res.render('createpost', {

		});
	},
	addDiscount: function(req, res){
		Post.getPostUser(4, function(err, product){
			res.render('addDiscount',{
				active_discount: 'active',
				product: product
			});
		});
	},

	addDiscountSave: function(req, res){
		Post.addDiscount(req.body.productID, req.body.percent, req.body.first, req.body.last, function(err, result){
			if(err!=null){
				res.end('0');
			}
			else {
				res.end('1');
			}
		})
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
