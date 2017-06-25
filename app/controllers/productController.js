const Product = require('../models/product.js');

const productController = {
	index: function(req, res){
		let user = req.user;
		const category = req.params.catename;
		Product.getProductBasedOnCate(category,  function(err, ress){
			if (err != null)
			{
				console.log(err);
			}
			else
			{
				console.log(ress);
				res.render('product', {
					user:user,
					products: ress,
					category: category,

				});
			}
		})

	},
	detail: function(req, res){
		let user = req.user;
		const productid = req.params.productid;
		console.log(req.add);
		Product.getProduct(productid,  function(err, ress){
			if (err != null)
			{
				console.log(err);
			}
			else
			{
				console.log(ress);
				const product = ress[0];
				Product.getAllPictureOf(productid, function(error, pictures){
					if (error != null)
					{
						console.log(error);
					}
					else
					{
						console.log(pictures);
						Product.getAllReview(productid, function(err1, reviews){
							if (err1 == null)
							{
								console.log(reviews);
								res.render('single', {
									user:user,
									pictures: pictures,
									product: product,
									comments: reviews
								});
							}
						})

					}

				})
				
			}
		})

	},
	addReview: function(req, res){
		Product.addReview(req.body.detail, req.body.customerid, req.body.productid, 
			function(err, ress){
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

module.exports = productController;
