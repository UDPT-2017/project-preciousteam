const Cart = require('../models/cart')

const cartController = {
	index: function(req, res){
		let user = req.user;
		console.log(user);
		res.render('home', {
			active_home: 'fixedactive',
			user: user
		});
	},
	add: function(req, res){
		console.log("hoho" + req.body.add + req.body.productid + req.body.quantity);
		const user = req.user;
		if (user == undefined)
		{
			res.end('-1');
		}
		else
		{
			if (req.body.add == 1){
			Cart.insertItem(req.user.userid, req.body.productid, req.body.quantity, function(err, ress)
			{
				if (err != null)
				{
					console.log(err);
				}else
				{
					res.end('1');
				}
			})
		}
		}
		
	}
};

module.exports = cartController;