const pool = require('./connect');

const Cart = {
	insertItem: function(customerid, productid, quantity, callback){
		pool.query("INSERT INTO CART VALUES($1::int, $2::int, $3::int, $4)", [customerid, productid, quantity, false], 
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
	payCart: function(){

	}
}

module.exports = Cart;