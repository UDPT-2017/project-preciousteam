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
	}
};

module.exports = userController;