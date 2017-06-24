const Cart = require('../models/cart')

function myFunct(err, result, res)
{
	if (err != null)
	{
		console.log(err);
	}else
	{
		res.end('1');
	}
}

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
		const myFunct = function(err, result, res)
		{
			if (err != null)
			{
				console.log(err);
			}else
			{
				res.end('1');
			}
		}
		console.log("hoho" + req.body.add + req.body.productid + req.body.quantity);
		const user = req.user;
		if (user == undefined)
			res.end('-1');
		else
		{
			if (req.body.add == 1){
				Cart.isExisted(req.body.productid, user.userid, function(err1, ress1)
				{
					if (err1 != null)
						console.log(err1);
					else
					{
						if (ress1.length == 0)
						{
							console.log('ds ne' + ress1);
							Cart.insertItem(req.user.userid, req.body.productid, req.body.quantity, res, myFunct);
						}
						else
						{
							Cart.addExistingItem(req.user.userid, req.body.productid, req.body.quantity, res, myFunct);
						}
					}
			})
		}
	}},
	delete: function(req, res){
		Cart.deleteItem(req.user.userid, req.body.productid, function(err, ress){
			if (err != null)
			{
				console.log(err);
			}
			else
			{
				res.end('1');
			}
		})
	},
	checkout: function(req, res){
		Cart.payCart(req.user.userid, function(err, ress){
			if (err != null)
			{
				console.log(err);
			}
			else
			{
				res.end('1');
			}
		})
	}
};

module.exports = cartController;