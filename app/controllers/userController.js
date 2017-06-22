
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
		res.render('user-cart', {
			active_cart: "active",
			user: req.user
		});
	},
	posts: function(req, res){
		res.render('posts', {
			active_post: "active",
			user: req.user
		});
	},
	createpost: function(req, res){
		res.render('createpost', {
			user: req.user
		});
	}
};

module.exports = userController;