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
	}
};

module.exports = userController;