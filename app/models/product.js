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
	}
}

module.exports = Product;