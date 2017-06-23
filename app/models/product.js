const pool = require('./connect');

const Product = {
	getProductBasedOnCate: function(catename, callback){
		pool.query("select distinct on (p.productid) p.productid, name, brand, typename, price, picid from product p, producttype pt, category c, picture pic where p.producttype = typeid  and c.catename = 'Female' and pt.category = c.cateid and catename = $1::text and  p.productid = pic.productid", [catename], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	getProduct: function(productid, callback){
		pool.query("select p.name, brand, price, quantity, u.name as salesman, time, description from product p, users u where p.productid = $1::int and p.salseman = u.userid", [productid], function(err, res){
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
	}
}

module.exports = Product;