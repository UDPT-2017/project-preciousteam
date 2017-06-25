const Product = require('../models/product.js');
const multer = require('multer');
const storage = require('../../config/upload');

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
	},
	createPost: function(req, res){
		const upload = multer({ storage : storage}).array('productPhoto', 3);
		upload(req,res,function(err) {
			const album = req.files;
			console.log(album);
			console.log(req.body);
			Product.addProduct(req.body.name, req.body.description, req.body.price, req.body.quan, req.user.userid, req.body.producttype, req.body.brand, req.body.category, 
			function(err1, ress){
				if (err1 != null)
				{
					console.log(err1);
					res.end('0');
				}
				else
				{
					let productid = ress[0].productid;
					Product.insertImages(album, productid,
					function(err2, ress1){
						if (err2 != null)
						{
							console.log(err2);
							res.end('0')
						}
						else
							res.end('1');
					})
				}
			});
		})
	},
	deleteProduct: function(req, res){
		Product.deleteProduct(req.body.productid, function(err, ress){
			if (err != null)
			{
				console.log(err);
				res.end('0');
			}
			else
			{
				res.end('1');
			}
		})
	}
};

module.exports = productController;
