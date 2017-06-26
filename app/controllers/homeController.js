const Product = require('../models/product')

const homeController = {
	index: function(req, res){
		let user = req.user;
		console.log(user);
		Product.getDiscountProduct(function(err, ress){
			if (err != null)
			{
				console.log(err);
			}
			else
			{
				console.log(ress);
				res.render('home', {
					active_home: 'fixedactive',
					user: user,
					products: ress
				});
			}
		})
		
	}
};

module.exports = homeController;
