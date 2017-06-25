const pool = require('./connect');

const Product = {
	getProductBasedOnCate: function(catename, callback){
		pool.query("select distinct on (p.productid) p.productid, name, brand, typename, price, picid from product p, producttype pt, category c, picture pic where p.producttype = typeid  and c.catename = $1::text and pt.category = c.cateid and catename = $1::text and  p.productid = pic.productid and p.state = 1", [catename], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	getProduct: function(productid, callback){
		pool.query("select p.name, brand, price, quantity, u.name as salesman, time, description, p.productid from product p, users u where p.productid = $1::int and p.salesman = u.userid", [productid], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	getAllPictureOf: function(productid, callback){

		pool.query("select picid from product p, picture pic where p.productid = $1::int and p.productid = pic.productid", [productid], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	addReview: function(detail, customerid, productid, callback){
		pool.query("insert into review values(default, $1::text, $2::int, $3::int, current_timestamp AT time zone 'UCT-7')", [detail, customerid, productid], 
			function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	getAllReview: function(productid, callback){
		pool.query("select detail, time, u.profilepic userPic, u.email userEmail from review r, users u where r.product = $1::int and r.customer = u.userid", [productid], 
			function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	insertImages: function(images, productid, callback){
		pool.query("insert into picture values($1::text, $2::int)", [images[0].filename, productid], 
			function(err, res){
			if (err != null)
				callback(err, null);
			else {
				if (images[1])
				{
					pool.query("insert into picture values($1::text, $2::int)", [images[1].filename, productid],
					function(err1, res1){
						if (err1 != null)
							callback(err1, null);
						else
						{
							if (images[2])
							{
								pool.query("insert into picture values($1::text, $2::int)", [images[2].filename, productid],
									function(err2, res2){
										if (err2 != null)
											callback(err2, null);
										else
											callback(null, res2.rows);
								})
							}
							else
								callback(null, res1.rows);
						}
					})
				}
				else
					callback(null, res.rows);
			}
		});
	},
	addProduct: function(name, description, price, quan, seller, type, brand, category, callback){
		pool.query("select typeid from producttype pt, category c where typename = $1::text and c.catename = $2::text and pt.category = c.cateid", [type, category], 
			function(err, res){
			if (err != null)
				callback(err, null);
			else {
				let typeid = res.rows[0];
				typeid = typeid.typeid;
				pool.query("insert into product values(default, $1::text, $2::text, $3::int, $4::int, $5::int, $6::int, current_timestamp AT time zone 'UCT-7', $7::text, null, 0)",
				[name, description, price, quan, seller, typeid, brand], 
				function(err1, res1){
					if (err1 != null)
						callback(err1, null);
					else
					{
						pool.query("select productid from product order by productid desc limit 1", 
						function(err2, res2){
							if (err2 != null)
								callback(err2, null);
							else
								callback(null, res2.rows);
						})
					}
				})
			}
		});
	},
	getAllPostsOf: function(seller, callback){
		pool.query("select distinct on(p.productid) p.productid, name, price, quantity, time, picid from product p, picture pic where state = 1 and salesman = $1::int and p.productid = pic.productid", [seller],
		function(err, res){
			if (err != null)
				callback(err, null);
			else
			{
				callback(null, res.rows);
			}
		})

	},
	deleteProduct: function(productid, callback){
		pool.query("update product set state = -1 where productid = $1::int", [productid],
		function(err, res){
			if (err != null)
				callback(err, null);
			else
			{
				callback(null, res.rows);
			}
		})

	}
}

module.exports = Product;