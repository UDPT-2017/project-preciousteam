const pool = require('./connect');

const Cart = {
	insertItem: function(customerid, productid, quantity, result, callback){
		pool.query("INSERT INTO CART VALUES(default, $1::int, $2::int, $3::int, $4)", [customerid, productid, quantity, false], 
			function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null, result);
			}
			else {
				callback(null, res.rows, result);
			}
		});
	},
	payCart: function(customerid, callback){
		pool.query("update cart set isPaid = true where customerid = $1::int", [customerid], 
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
	getAllItems: function(customerid, callback){
		pool.query("select distinct on (p.productid) p.productid, p.name, c.quantity, p.price, picid, percent as discount from cart c, picture pic, product p full outer join discount d on p.productid = d.product and current_timestamp AT time zone 'UCT-7' > firstday and current_timestamp AT time zone 'UCT-7' <lastday  where c.productid = p.productid and c.customerid = $1::int and isPaid = false and pic.productid = p.productid ",
		 [customerid], function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	isExisted: function(productid, customerid, callback){
		pool.query("select * from cart where productid = $1::int and customerid = $2::int and isPaid = false", [productid, customerid], 
					function(err, res){
					if (err != null){
						callback(err, null);
					}
					else {
						callback(null, res.rows);
					}
		});
	},
	addExistingItem: function(customerid, productid, quantity, result, callback){
		pool.query("update cart set quantity = quantity + $3::int where customerid = $1::int and productid = $2::int and isPaid = false", [customerid, productid, quantity], 
			function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null, result);
			}
			else {
				callback(null, res.rows, result);
			}
		});
	},
	deleteItem: function(customerid, productid, callback){
		pool.query("delete from cart where productid = $1::int and customerid = $2::int and isPaid = false", [productid, customerid], 
					function(err, res){
					if (err != null){
						callback(err, null);
					}
					else {
						callback(null, res.rows);
					}
		});
	}
}

module.exports = Cart;